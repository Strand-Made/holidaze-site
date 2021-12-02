import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { schema } from "./loginSchema";
import { PrimaryButton } from "../../Button/Button";
import { baseUrl } from "../../../api/baseUrl";
import { useAuth } from "../../../context/AuthContext";
import { FetchStatus } from "../../../utils/globalTypes";
import { borderRadius, shadows } from "../../../globalStyle/_variables";
import FlexContainer from "../../layout/utilities/Flex/FlexContainer";
import Heading from "../../Typography/Heading";
import Label from "../Label/Label";
import Input from "../Input/Input";
import Message from "../../Message/Message";
import Spacer from "../../layout/utilities/Spacer/Spacer";
import Stack from "../../layout/Stack/Stack";

const Modal = styled.div`
  background: white;
  border-radius: ${borderRadius.md};
  box-shadow: ${shadows.md};
  padding: 5rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Form = styled.form`
  width: 100%;
  padding: 1rem;
`;
const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

type FormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [formError, setFormError] = useState("");
  const [status, setStatus] = useState<FetchStatus>(FetchStatus.IDLE);

  const { setAuth } = useAuth();
  const loginUser = async (user: FormData) => {
    setStatus(FetchStatus.FETCHING);
    await axios
      .post(`${baseUrl}/auth/local`, {
        identifier: user.email,
        password: user.password,
      })
      .then((res) => {
        const { jwt } = res.data;
        const { email, id, username, confirmed, role } = res.data.user;

        const userType = res.data.user.role.type;
        const user = {
          token: jwt,
          userinfo: {
            id,
            username,
            email,
            type: userType,
            confirmed,
            role,
          },
        };
        setStatus(FetchStatus.SUCCESS);
        setAuth(user);
      })
      .catch((error) => {
        console.log(error.response.status);
        setStatus(FetchStatus.ERROR);
        if (error.response.status === 400) {
          return setFormError("Could not find user");
        }
        if (error.response.status === 405) {
          return setFormError(
            "Looks like we have an issue with our server, please try again later"
          );
        }
      });
  };

  const onSubmit = handleSubmit((user) => loginUser(user));
  return (
    <Modal>
      <FlexContainer col alignItems="center">
        <Heading size="xl">Welcome Back!</Heading>
        <Form onSubmit={onSubmit}>
          <FormContainer>
            <Stack space={"0.5rem"}>
              {formError && <Message.Error>{formError}</Message.Error>}
              <Stack space={"0.25rem"}>
                <Label htmlFor="email">Email</Label>
                <Input
                  {...register("email")}
                  name="email"
                  type="email"
                  placeholder="Your email"
                />
                <Spacer mt="0.5" />
                {errors.email && (
                  <Message.Error>{errors.email.message}</Message.Error>
                )}
              </Stack>
              <Stack space={"0.25rem"}>
                <Label htmlFor="password">Password</Label>

                <Input
                  {...register("password")}
                  name="password"
                  type="password"
                  placeholder="Your password"
                />
                <Spacer mt="0.5" />
                {errors.password && (
                  <Message.Error>{errors.password.message}</Message.Error>
                )}
              </Stack>
              <FlexContainer col gap="0.75rem">
                <PrimaryButton size="md" full>
                  {status === FetchStatus.IDLE && "Login"}
                  {status === FetchStatus.FETCHING && "Logging in..."}
                </PrimaryButton>
              </FlexContainer>
            </Stack>
          </FormContainer>
        </Form>
      </FlexContainer>
    </Modal>
  );
};

export default LoginForm;
