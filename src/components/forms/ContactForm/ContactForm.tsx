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
import Image from "../../layout/Image/Image";

const ContactBox = styled.div`
  display: flex;
  background: white;
  border-radius: ${borderRadius.md};
  box-shadow: ${shadows.sm};
`;

const FormContainer = styled.div`
  flex-grow: 1;
  max-width: 600px;
`;

const Form = styled.form`
  width: 100%;
  padding: 2rem;
`;
const ContactImage = styled.div`
  width: 100%;
  border-top-right-radius: ${borderRadius.md};
  border-bottom-right-radius: ${borderRadius.md};
`;

const schema = yup.object({
  name: yup.string(),
  email: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

const ContactForm = ({ status, sendFormData, error }) => {
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

  const onSubmit = (data) => {
    const contactData = {
      from_email: data.email,
      from_name: data.name,
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
        <FormContainer>
          <Heading.H2 size="l">Contact form</Heading.H2>
          <Stack space={1}>
            <Box>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                name="name"
                {...register("name")}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <Message.Error>{errors.name.message}</Message.Error>
              )}
            </Box>
            <Box>
              <Label htmlFor="email">Email</Label>
              <Stack space={0.5}>
                <Input
                  type="text"
                  name="email"
                  {...register("email")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <Message.Error>{errors.email.message}</Message.Error>
                )}
              </Stack>
            </Box>
            <Box>
              <Label htmlFor="subject">Subject</Label>
              <Stack space={0.5}>
                <Input
                  type="text"
                  name="subject"
                  {...register("subject")}
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                {errors.subject && (
                  <Message.Error>{errors.subject.message}</Message.Error>
                )}
              </Stack>
            </Box>
            <Box>
              <Label htmlFor="message">Message</Label>
              <Stack space={0.5}>
                <TextBox
                  name="message"
                  {...register("message")}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                {errors.message && (
                  <Message.Error>{errors.message.message}</Message.Error>
                )}
              </Stack>
            </Box>
            <Box>
              <PrimaryButton full size="md">
                {status === "idle" && "Submit"}
                {status === "submitting" && "Submitting..."}
                {status === "success" && "Message sent!"}
                {!status && "Submit"}
              </PrimaryButton>
            </Box>
          </Stack>
        </FormContainer>
      </Form>
      <ContactImage>
        <Image
          src="https://images.unsplash.com/photo-1543511213-42ed72118e81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=786&q=80"
          alt="bergen"
        />
      </ContactImage>
    </ContactBox>
  );
};

export default ContactForm;
