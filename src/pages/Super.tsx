import axios from "axios";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

import { useAuth } from "../context/AuthContext";
import { FetchStatus } from "../utils/globalTypes";
import { baseUrl } from "../api/baseUrl";
import Container from "../components/layout/Container/Container";
import Heading from "../components/Typography/Heading";
import Stack from "../components/layout/Stack/Stack";
import ContactMessages from "../components/admin-dashboard/contact-messages/ContactMessages";
import Main from "../components/layout/Main/Main";
import Message from "../components/Message/Message";
import EmptyEnquiries from "../components/empty-states/EmptyEnquiries";
import DashboardLoader from "../components/layout/SkeleteonLoader/Dashboard/DashboardLoader";

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
  }, [auth, navigate]);

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
      } catch (error) {
        setStatus(FetchStatus.ERROR);
        setError(error.toString());
      }
    };
    fetchMessages();
  }, [auth.token]);

  return (
    <Main>
      <Container>
        <Heading>Dashboard</Heading>
        <Stack>
          <Heading.H2>Messages</Heading.H2>
          {status === FetchStatus.ERROR && (
            <Message.Error>{error}</Message.Error>
          )}
          {status === FetchStatus.FETCHING && <DashboardLoader />}
          <Stack space={"1rem"}>
            {messages.length > 0 ? (
              messages.map((message) => (
                <ContactMessages key={message.id} message={message} />
              ))
            ) : (
              <EmptyEnquiries />
            )}
          </Stack>
        </Stack>
      </Container>
    </Main>
  );
};

export default Super;
