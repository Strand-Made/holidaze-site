import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { borderRadius, shadows } from "../../../globalStyle/_variables";
import { PrimaryButton } from "../../Button/Button";
import Label from "../Label/Label";
import Input from "../Input/Input";
import TextBox from "../Input/TextBox";
import Stack from "../../layout/Stack/Stack";
import Box from "../../layout/Box/Box";
import { useEffect, useState } from "react";
import Message from "../../Message/Message";
import Heading from "../../Typography/Heading";
import InputContainer from "../Input/InputContainer";

interface IContactform {
  status: string;
  sendFormData: any;
  error: string;
}

const ContactBox = styled.div`
  display: flex;
  background: white;
  max-width: 600px;
  margin: 0 auto;
  border-radius: ${borderRadius.md};
  box-shadow: ${shadows.sm};
`;

const Form = styled.form`
  width: 100%;
  padding: 2rem;
`;

const schema = yup.object({
  userName: yup.string(),
  email: yup.string().email().required("Please include an email"),
  subject: yup.string().required("Please include a subject"),
  message: yup.string().required("Please include a message"),
});

type TContactFormData = {
  email: string;
  message: string;
  subject: string;
  userName: string;
};

const ContactForm = ({ status, sendFormData, error }: IContactform) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: TContactFormData) => {
    const contactData = {
      from_email: data.email,
      from_name: data.userName,
      message,
      subject,
    };
    sendFormData(contactData);
  };

  useEffect(() => {
    if (status === "success") {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  }, [status]);

  return (
    <ContactBox>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {error && <Message.Error>{error}</Message.Error>}
        <Stack space="2rem">
          <Heading.H2 size="l">Drop us a line</Heading.H2>
          <Stack space="1rem">
            <InputContainer>
              <Label htmlFor="userName">Name</Label>
              <Input
                type="text"
                {...register("userName")}
                value={name}
                name="userName"
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <Message.Error>{errors.name.message}</Message.Error>
              )}
            </InputContainer>
            <InputContainer>
              <Label htmlFor="email">Email</Label>
              <Stack space="0.5rem">
                <Input
                  type="text"
                  {...register("email")}
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <Message.Error>{errors.email.message}</Message.Error>
                )}
              </Stack>
            </InputContainer>
            <InputContainer>
              <Label htmlFor="subject">Subject</Label>
              <Stack space="0.5rem">
                <Input
                  type="text"
                  {...register("subject")}
                  value={subject}
                  name="subject"
                  onChange={(e) => setSubject(e.target.value)}
                />
                {errors.subject && (
                  <Message.Error>{errors.subject.message}</Message.Error>
                )}
              </Stack>
            </InputContainer>
            <InputContainer>
              <Label htmlFor="message">Message</Label>
              <Stack space="0.5rem">
                <TextBox
                  {...register("message")}
                  value={message}
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                />
                {errors.message && (
                  <Message.Error>{errors.message.message}</Message.Error>
                )}
              </Stack>
            </InputContainer>
            <Box>
              <PrimaryButton full size="md">
                {status === "idle" && "Submit"}
                {status === "submitting" && "Submitting..."}
                {status === "success" && "Message sent!"}
                {!status && "Submit"}
              </PrimaryButton>
            </Box>
          </Stack>
        </Stack>
      </Form>
    </ContactBox>
  );
};

export default ContactForm;
