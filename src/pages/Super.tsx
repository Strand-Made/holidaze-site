import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Container from "../components/layout/Container/Container";
import Heading from "../components/Typography/Heading";

import Box from "../components/layout/Box/Box";
import { FetchStatus } from "../utils/globalTypes";
import { baseUrl } from "../api/baseUrl";
import axios from "axios";
import Stack from "../components/layout/Stack/Stack";
import Switcher from "../components/layout/utilities/Switcher/Switcher";
import { EnquiriesContainer } from "../components/admin-dashboard/Enquiries/Enquiries";
import Paragraph from "../components/Typography/Paragraph";
import ContactMessages from "../components/admin-dashboard/contact-messages/ContactMessages";

const Super = () => {
  const { auth } = useAuth();
  let navigate = useNavigate();
  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
    if (auth.userinfo.type === "authenticated") {
      navigate("/admin");
    }
  }, [auth]);

  const [error, setError] = useState(null);
  const [status, setStatus] = useState<FetchStatus>(FetchStatus.IDLE);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const url = `${baseUrl}/admin-mails`;
      try {
        setStatus(FetchStatus.FETCHING);
        const res = await axios(url, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });
        setStatus(FetchStatus.SUCCESS);
        setMessages(res.data);
        console.log(res.data);
      } catch (error) {
        setStatus(FetchStatus.ERROR);
        setError(error.toString());
      }
    };
    fetchMessages();
  }, [auth.token]);

  return (
    <Container>
      <Heading>Dashboard</Heading>
      <Stack>
        <Heading.H2>Messages</Heading.H2>
        <Stack space={1}>
          {messages.map((message) => (
            <ContactMessages key={message.id} message={message} />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Super;
