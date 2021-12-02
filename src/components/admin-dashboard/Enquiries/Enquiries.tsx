import styled from "styled-components";
import { borderRadius } from "../../../globalStyle/_variables";
import Heading from "../../Typography/Heading";
import Switcher from "../../layout/utilities/Switcher/Switcher";
import Spacer from "../../layout/utilities/Spacer/Spacer";
import Box from "../../layout/Box/Box";
import FlexContainer from "../../layout/utilities/Flex/FlexContainer";
import { SecondaryButton } from "../../Button/Button";
import FlexEnd from "../../layout/utilities/Flex/FlexEnd";

type TEnquiry = {
  enquiry: {
    Message: string;
    Name: string;
    email: string;
    establishment_name: string;
    from_date: Date;
    to_date: Date;
    created_at: string;
    id: number;
    guests: number;
  };
  setToggle?: any;
  setOpenEnquiry?: any;
};

const EnquiryContainer = styled.div`
  background: var(--cool-gray-1);
  border-radius: ${borderRadius.sm};
  padding: 1rem;
`;

const EnquiryData = styled.div`
  font-weight: 600;
`;

const Enquiries = ({ enquiry, setToggle, setOpenEnquiry }: TEnquiry) => {
  let sentDate = new Date(enquiry.created_at).toLocaleDateString("nor");

  return (
    <EnquiryContainer>
      <Box>
        <Switcher limit={5} threshold={300}>
          <FlexContainer col>
            <Heading.H3 weight="400">From</Heading.H3>
            <EnquiryData>{enquiry.Name}</EnquiryData>
          </FlexContainer>

          <Box>
            <Heading.H3 weight="400">Stay at</Heading.H3>
            <EnquiryData>{enquiry.establishment_name}</EnquiryData>
          </Box>
          <Box>
            <Heading.H3 weight="400">Guests</Heading.H3>
            <EnquiryData>{enquiry.guests}</EnquiryData>
          </Box>
          <Box>
            <Heading.H3 weight="400">Sent</Heading.H3>
            <EnquiryData>{sentDate}</EnquiryData>
          </Box>
        </Switcher>
        <Spacer mt="1" />
        <FlexContainer col>
          <FlexEnd>
            <Box>
              <SecondaryButton
                onClick={() => {
                  setOpenEnquiry(enquiry.id);
                  setToggle();
                }}
                invert
              >
                View
              </SecondaryButton>
            </Box>
          </FlexEnd>
        </FlexContainer>
      </Box>
    </EnquiryContainer>
  );
};

export default Enquiries;
