import styled from "styled-components";
import { borderRadius, shadows } from "../../../globalStyle/_variables";
import Box from "../../layout/Box/Box";
import Switcher from "../../layout/utilities/Switcher/Switcher";
import Heading from "../../Typography/Heading";
import Paragraph from "../../Typography/Paragraph";

type TContactMessages = {
  message: {
    from_name: string;
    from_email: string;
    subject: string;
    id: number;
    message: string;
  };
};
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: var(--cool-gray-2);
  border-radius: ${borderRadius.md};
  padding: 1rem;
  overflow-y: scroll;
  box-shadow: ${shadows.sm};
  overflow: hidden;
  background: white;
`;

const ContactMessages = ({ message }: TContactMessages) => {
  return (
    <MessageContainer>
      <Switcher limit={1} threshold={200}>
        <Box>
          <Heading.H3 size="md">{message.from_name}</Heading.H3>
        </Box>
        <Box>
          <Heading.H3 size="md">{message.subject}</Heading.H3>
        </Box>
        <Box>
          <Paragraph>{message.message}</Paragraph>
        </Box>
        <Box>
          <a href={`mailto:${message.from_email}?subject=${message.subject}`}>
            Respond
          </a>
        </Box>
      </Switcher>
    </MessageContainer>
  );
};

export default ContactMessages;
