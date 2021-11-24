import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { borderRadius, shadows } from "../../../globalStyle/_variables";
import FlexContainer from "../../layout/utilities/Flex/FlexContainer";
import Heading from "../../Typography/Heading";
import Label from "../Label/Label";
import InputContainer from "../Input/InputContainer";
import Input from "../Input/Input";
import { PrimaryButton, SecondaryButton } from "../../Button/Button";
import { baseUrl } from "../../../api/baseUrl";
import { useAuth } from "../../../context/AuthContext";
import Message from "../../Message/Message";
import Spacer from "../../layout/utilities/Spacer/Spacer";
import { useState } from "react";

const Form = styled.form`
  width: 100%;
  padding: 1rem;
`;
const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const Modal = styled.div`
  background: var(--teal-1);
  border-radius: ${borderRadius.md};
  box-shadow: ${shadows.md};
  padding: 1rem;
`;

type FormData = {
  email: string;
  password: string;
};

type TFormErrors = "400" | "405" | null;

const schema = yup
  .object({
    email: yup.string().required().email("Please include a valid email"),
    password: yup.string().required(),
  })
  .required();

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [formError, setFormError] = useState<TFormErrors>(null);

  const { setAuth } = useAuth();
  const loginUser = async (user: FormData) => {
    setFormError(null);
    const res = axios
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
        setAuth(user);
      })
      .catch((error) => {
        console.log(error.response);
        setFormError(error.response.statusText);
      });
  };

  const onSubmit = handleSubmit((user) => loginUser(user));
  return (
    <Modal>
      <FlexContainer col alignItems="center">
        <Heading size="xl">Login</Heading>
        <Form onSubmit={onSubmit}>
          <FormContainer>
            {formError && <Message.Error>{formError}</Message.Error>}
            <InputContainer>
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
            </InputContainer>
            <InputContainer>
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
            </InputContainer>
            <FlexContainer col gap="0.75rem">
              <PrimaryButton size="md" full>
                Login
              </PrimaryButton>
              <SecondaryButton>Sign Up</SecondaryButton>
            </FlexContainer>
          </FormContainer>
        </Form>
      </FlexContainer>
    </Modal>
  );
};

export default LoginForm;
