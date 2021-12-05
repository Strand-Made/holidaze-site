import axios from "axios";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import styled from "styled-components";
import { baseUrl } from "../../../../api/baseUrl";
import { borderRadius } from "../../../../globalStyle/_variables";
import { FetchStatus } from "../../../../utils/globalTypes";
import MailButton from "../../../Button/MailButton";
import Box from "../../../layout/Box/Box";
import Popover from "../../../layout/Popover/Popover";
import DashboardLoader from "../../../layout/SkeleteonLoader/Dashboard/DashboardLoader";
import Stack from "../../../layout/Stack/Stack";
import FlexContainer from "../../../layout/utilities/Flex/FlexContainer";
import Message from "../../../Message/Message";
import Emphasize from "../../../Typography/Emphasize";
import Heading from "../../../Typography/Heading";
import Paragraph from "../../../Typography/Paragraph";

interface IEnquiryModal {
  enquiry: number | null;
  token: string | undefined;
  toggle: boolean;
  setToggle: () => void;
}

type TEnquiry = {
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

const StylingBox = styled.div`
  background: var(--cool-gray-1);
  padding: 1rem;
`;

const MessageBox = styled.div`
  background: var(--cool-gray-2);
  border-top-right-radius: ${borderRadius.md};
  border-bottom-left-radius: ${borderRadius.md};
  border-bottom-right-radius: ${borderRadius.md};
  padding: 1rem;
`;

const EnquiryModal = ({ enquiry, token, setToggle }: IEnquiryModal) => {
  const [error, setError] = useState();
  const [status, setStatus] = useState<FetchStatus>(FetchStatus.IDLE);
  const [myEnquiry, setMyEnquiry] = useState<TEnquiry | null>(null);

  useEffect(() => {
    let url = `${baseUrl}/enquiries?id=${enquiry}`;
    const getEnquiry = async () => {
      setStatus(FetchStatus.FETCHING);
      try {
        const res = await axios(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setMyEnquiry(res.data[0]);

        setStatus(FetchStatus.SUCCESS);
      } catch (error: any) {
        setStatus(FetchStatus.ERROR);
        setError(error.toString());
      }
    };
    getEnquiry();
  }, [enquiry, token]);

  return (
    <Popover position="fixed">
      <StylingBox>
        <FlexContainer
          gap={"3rem"}
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Heading.H4 size="l">Enquiry</Heading.H4>
          <button onClick={setToggle}>
            <MdClose size="24" color="var(--cool-gray-9)" />
          </button>
        </FlexContainer>
        <Box padding={"1rem"}>
          {status === FetchStatus.SUCCESS && (
            <Stack space={"0.25rem"}>
              <Box padding={"0"}>
                <span>
                  From <Emphasize>{myEnquiry?.Name}</Emphasize>
                </span>
              </Box>
              <Box padding={"0"}>
                <span>
                  <Emphasize>{myEnquiry?.guests}</Emphasize>
                  {myEnquiry && myEnquiry.guests > 1 ? "Guests" : "Guest"}
                </span>
              </Box>

              <FlexContainer gap={"0.5rem"}>
                <FlexContainer alignItems="center" col>
                  <Box padding={"0"}>From</Box>
                  <Box padding={"0"}>
                    <Emphasize>{myEnquiry?.from_date}</Emphasize>
                  </Box>
                </FlexContainer>
                <FlexContainer alignItems="center" col>
                  <Box padding={"0"}>To</Box>
                  <Box padding={"0"}>
                    <Emphasize>{myEnquiry?.to_date}</Emphasize>
                  </Box>
                </FlexContainer>
              </FlexContainer>

              <FlexContainer col gap={"1.5rem"}>
                <Stack>
                  <Paragraph>{myEnquiry?.Name} wrote:</Paragraph>
                  <MessageBox>
                    <Paragraph>{myEnquiry?.Message}</Paragraph>
                  </MessageBox>
                </Stack>

                <MailButton
                  href={`mailto:${myEnquiry?.email}?subject=Your stay at ${myEnquiry?.establishment_name}`}
                >
                  Respond
                </MailButton>
              </FlexContainer>
            </Stack>
          )}

          {status === FetchStatus.ERROR && (
            <Message.Error>{error}</Message.Error>
          )}
          {status === FetchStatus.FETCHING && <DashboardLoader />}
        </Box>
      </StylingBox>
    </Popover>
  );
};

export default EnquiryModal;
