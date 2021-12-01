import { Helmet } from "react-helmet-async";
import Container from "../components/layout/Container/Container";
import ContactForm from "../components/forms/ContactForm/ContactForm";
import { useEffect, useState } from "react";
import { baseUrl } from "../api/baseUrl";
import axios from "axios";
import { FormStatus } from "../utils/globalTypes";
import Heading from "../components/Typography/Heading";
import Box from "../components/layout/Box/Box";
import Spacer from "../components/layout/utilities/Spacer/Spacer";
import Main from "../components/layout/Main/Main";
import Stack from "../components/layout/Stack/Stack";
import SmallBanner from "../components/Banner/SmallBanner/SmallBanner";
import Paragraph from "../components/Typography/Paragraph";
import Emphasize from "../components/Typography/Emphasize";
import FlexContainer from "../components/layout/utilities/Flex/FlexContainer";
import { MdLocalPhone } from "react-icons/md";

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
    <>
      <Helmet>
        <title>Contact us | Holidaze</title>
        <meta
          name="description"
          content="If you need any help booking your stay or you have any other questions. Please feel free to contact us here."
        />
      </Helmet>
      <Main>
        <Container>
          <Box padding="1rem">
            <Heading size="2xl">Get in touch</Heading>
            <Paragraph>How can we help?</Paragraph>
          </Box>
          <Spacer mt="1.5" />
          <ContactForm
            status={status}
            error={error}
            sendFormData={sendContactData}
          />
          <Spacer mt="2" />
          <Stack>
            <Heading.H3 size="xl">You can also call us </Heading.H3>
            <SmallBanner>
              <FlexContainer gap="1.5rem" alignItems="baseline">
                <MdLocalPhone size="42" />
                <Box padding="0">
                  <Paragraph>
                    <Heading.H4 size="xl">Phone</Heading.H4>
                    You can reach us 24/7 at this number:
                    <Emphasize> +999 999 999</Emphasize>
                  </Paragraph>
                </Box>
              </FlexContainer>
            </SmallBanner>
          </Stack>
        </Container>
      </Main>
    </>
  );
};

export default Contact;
