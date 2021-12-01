import axios from "axios";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import styled from "styled-components";
import { baseUrl } from "../../../../api/baseUrl";
import { borderRadius } from "../../../../globalStyle/_variables";
import { FetchStatus } from "../../../../utils/globalTypes";
import LinkButton from "../../../Button/LinkButton";
import Box from "../../../layout/Box/Box";
import Popover from "../../../layout/Popover/Popover";
import Stack from "../../../layout/Stack/Stack";
import FlexContainer from "../../../layout/utilities/Flex/FlexContainer";
import Message from "../../../Message/Message";
import Emphasize from "../../../Typography/Emphasize";
import Heading from "../../../Typography/Heading";
import Paragraph from "../../../Typography/Paragraph";

interface IEnquiryModal {
  enquiry: number;
  token: string;
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
  const [myEnquiry, setMyEnquiry] = useState<TEnquiry>(null);

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
      } catch (error) {
        setStatus(FetchStatus.ERROR);
        setError(error.toString());
      }
    };
    getEnquiry();
  }, [enquiry, token]);

  status === FetchStatus.SUCCESS && console.log(myEnquiry);

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
            <MdClose size="24" />
          </button>
        </FlexContainer>
        <Box padding={"1rem"}>
          {status === FetchStatus.SUCCESS && (
            <Stack space={"0.25rem"}>
              <Box padding={"0"}>
                <span>
                  From <Emphasize>{myEnquiry.Name}</Emphasize>
                </span>
              </Box>
              <Box padding={"0"}>
                <span>
                  Guests <Emphasize>{myEnquiry.guests}</Emphasize>
                </span>
              </Box>

              <FlexContainer gap={"0.5rem"}>
                <FlexContainer alignItems="center" col>
                  <Box padding={"0"}>From</Box>
                  <Box padding={"0"}>
                    <Emphasize>{myEnquiry.from_date}</Emphasize>
                  </Box>
                </FlexContainer>
                <FlexContainer alignItems="center" col>
                  <Box padding={"0"}>To</Box>
                  <Box padding={"0"}>
                    <Emphasize>{myEnquiry.to_date}</Emphasize>
                  </Box>
                </FlexContainer>
              </FlexContainer>

              <FlexContainer col gap={"1.5rem"}>
                <Stack>
                  <Paragraph>{myEnquiry.Name} wrote:</Paragraph>
                  <MessageBox>
                    <Paragraph>{myEnquiry.Message}</Paragraph>
                  </MessageBox>
                </Stack>

                <LinkButton to="" size="md" full>
                  Respond
                </LinkButton>
              </FlexContainer>
            </Stack>
          )}

          {status === FetchStatus.ERROR && (
            <Message.Error>{error}</Message.Error>
          )}
          {status === FetchStatus.FETCHING && <div>FETCHING</div>}
        </Box>
      </StylingBox>
    </Popover>
  );
};

export default EnquiryModal;
