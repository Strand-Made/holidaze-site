import { MdClose } from "react-icons/md";
import Box from "../../layout/Box/Box";
import Stack from "../../layout/Stack/Stack";
import FlexContainer from "../../layout/utilities/Flex/FlexContainer";
import Emphasize from "../../Typography/Emphasize";
import Heading from "../../Typography/Heading";
import Paragraph from "../../Typography/Paragraph";
import EnquireForm from "../../forms/EnquireForm/EnquireForm";
import { TUser } from "../../../utils/globalTypes";

interface IEnquirePopup {
  host?: TUser;
  establishmentTitle?: string;
  setToggle: () => void;
  establishment?: {
    title: string;
  };
  startDate: Date;
  endDate?: Date;
  guests: number;
}

const EnquirePopup = ({
  host,
  establishmentTitle,
  setToggle,
  establishment,
  guests,
  startDate,
  endDate,
}: IEnquirePopup) => {
  return (
    <Box background={"var(--cool-gray-1)"} borderRadius shadow>
      <Box padding="0.5rem">
        <Stack>
          <FlexContainer justifyContent="space-between">
            <Box>
              <Heading.H4 size="l">Your Enquiry</Heading.H4>
            </Box>
            <button onClick={setToggle}>
              <MdClose size="24" color="var(--cool-gray-9)" />
            </button>
          </FlexContainer>
          <Box>
            <Heading.H5 size="xl">Staying at {establishment?.title}</Heading.H5>
          </Box>
        </Stack>
        {guests || startDate ? (
          <Box>
            <Stack>
              {guests ? (
                <Box>
                  <Paragraph>
                    With<Emphasize> {guests} </Emphasize>
                    {guests > 1 ? "guests" : "guest"}
                  </Paragraph>
                </Box>
              ) : null}
              {startDate && (
                <Box>
                  <Paragraph>
                    From <Emphasize>{startDate.toDateString()}</Emphasize>
                  </Paragraph>
                </Box>
              )}
              {endDate && (
                <Box>
                  <Paragraph>
                    To <Emphasize>{endDate.toDateString()}</Emphasize>
                  </Paragraph>
                </Box>
              )}
            </Stack>
          </Box>
        ) : null}
        <EnquireForm
          host={host}
          guests={guests}
          startDate={startDate}
          endDate={endDate}
          title={establishmentTitle}
        />
      </Box>
    </Box>
  );
};

export default EnquirePopup;
