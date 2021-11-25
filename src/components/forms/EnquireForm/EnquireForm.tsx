import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Stack from "../../layout/Stack/Stack";
import Input from "../Input/Input";
import Label from "../Label/Label";
import TextBox from "../Input/TextBox";
import { PrimaryButton } from "../../Button/Button";
import Message from "../../Message/Message";
import Box from "../../layout/Box/Box";
import axios from "axios";
import { baseUrl } from "../../../api/baseUrl";
import { TUser } from "../../../pages/Establishment";
import { useState } from "react";
import { FetchStatus } from "../../../utils/globalTypes";

interface IEnquireForm {
  host: TUser;
  startDate: Date;
  endDate: Date;
  guests: number;
  title: string;
}

const Form = styled.form`
  min-width: 200px;
  padding: 1rem;
`;

const schema = yup.object({
  firstName: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
});

const EnquireForm = ({
  host,
  startDate,
  endDate,
  guests,
  title,
}: IEnquireForm) => {
  const [error, setError] = useState("");
  const [status, setStatus] = useState<FetchStatus>(FetchStatus.IDLE);

  async function sendEnquire(data) {
    const url = `${baseUrl}/enquiries`;
    try {
      setStatus(FetchStatus.FETCHING);
      const res = await axios({
        method: "POST",
        url: url,
        data,
      });

      const enqRes = res.data;
      setStatus(FetchStatus.SUCCESS);
      console.log(enqRes);
    } catch (error) {
      setStatus(FetchStatus.ERROR);
      const getErrors = error.response.data.data.errors;

      if (getErrors.from_date) {
        setError("Please include check-in date");
      }
      if (getErrors.to_date) {
        setError("Please include check-out date.");
      }
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    const formData = {
      Name: data.firstName,
      Message: data.message,
      email: data.email,
      establishment_name: title,
      users_permissions_user: {
        id: host.id,
        email: host.email,
      },
      to_date: startDate,
      from_date: endDate,
      guests: guests,
    };
    sendEnquire(formData);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        {error && (
          <Box>
            <Message.Info>{error}</Message.Info>
          </Box>
        )}
        <Box>
          <Label htmlFor="firstName"> Your name </Label>
          <Input
            aria-invalid={errors.firstName ? "true" : "false"}
            type="text"
            id="firstName"
            placeholder="Name"
            {...register("firstName")}
          />
          {errors.firstName && (
            <Message.Error>{errors.firstName.message}</Message.Error>
          )}
        </Box>
        <Box>
          <Label htmlFor="email"> Your email </Label>
          <Input
            type="email"
            placeholder="Email"
            aria-invalid={errors.email ? "true" : "false"}
            id="email"
            {...register("email")}
          />
          {errors.email && (
            <Message.Error>{errors.email.message}</Message.Error>
          )}
        </Box>
        <Box>
          <Label htmlFor="message"> Enquiry </Label>
          <TextBox
            rows={5}
            placeholder="Additional details"
            aria-invalid={errors.message ? "true" : "false"}
            {...register("message")}
          />
          {errors.message && (
            <Message.Error>{errors.message.message}</Message.Error>
          )}
        </Box>
        <Box>
          <PrimaryButton type="submit" size="md">
            {status === FetchStatus.IDLE && "Submit"}
            {status === FetchStatus.FETCHING && "Submitting..."}
            {status === FetchStatus.SUCCESS && "Message sent!"}
            {!status && "Submit"}
          </PrimaryButton>
        </Box>
      </Stack>
    </Form>
  );
};

export default EnquireForm;
