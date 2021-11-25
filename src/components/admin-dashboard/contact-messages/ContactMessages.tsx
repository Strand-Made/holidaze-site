import styled from "styled-components";
import { FetchStatus } from "../../../utils/globalTypes";
import Box from "../../layout/Box/Box";
import Switcher from "../../layout/utilities/Switcher/Switcher";
import Heading from "../../Typography/Heading";
import Paragraph from "../../Typography/Paragraph";
import { EnquiriesContainer } from "../Enquiries/Enquiries";

const MessageContainer = styled(EnquiriesContainer)`
  overflow: hidden;
  background: white;
`;

const ContactMessages = ({ message, status }) => {
  return (
    <MessageContainer>
      {status === FetchStatus.FETCHING && "Loading"}
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
