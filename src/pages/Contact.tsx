import Container from "../components/layout/Container/Container";
import ContactForm from "../components/forms/ContactForm/ContactForm";
import { useEffect, useState } from "react";
import { baseUrl } from "../api/baseUrl";
import axios from "axios";
import { FormStatus } from "../utils/globalTypes";
import Heading from "../components/Typography/Heading";
import Box from "../components/layout/Box/Box";
import Banner from "../components/Banner/Banner";
import Spacer from "../components/layout/utilities/Spacer/Spacer";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact us | Holidaze";
  });

  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
  const [error, setError] = useState(null);

  async function sendContactData(data) {
    const url = `${baseUrl}/admin-mails`;
    try {
      setStatus(FormStatus.SUBMITTING);
      const res = await axios({
        method: "POST",
        url,
        data,
      });
      if (res.data) {
        setStatus(FormStatus.SUCCESS);
      }
    } catch (error) {
      setStatus(FormStatus.ERROR);
      setError(error.toString());
    }
  }

  return (
    <Container>
      <Box padding="1rem">
        <Heading size="md">
          For all questions regarding refunds, booking or any other problem
          you're facing. Don't hesitate to contact our customer service below
        </Heading>
      </Box>
      <Spacer mt="1.5" />
      <ContactForm
        status={status}
        error={error}
        sendFormData={sendContactData}
      />
    </Container>
  );
};

export default Contact;
