import styled from "styled-components";
import { borderRadius, shadows } from "../../../globalStyle/_variables";
import { PrimaryButton } from "../../Button/Button";
import Input from "../../forms/Input/Input";
import Label from "../../forms/Label/Label";
import Box from "../../layout/Box/Box";
import Stack from "../../layout/Stack/Stack";
import StayDatePicker from "../../StayDatePicker/StayDatePicker";
import Emphasize from "../../Typography/Emphasize";
import Heading from "../../Typography/Heading";

interface IStayCalculator {
  price: number;
  setToggle: any;
  handleDateSelect: any;
  guests: number;
  setGuests: any;
  startDate: Date;
  endDate: Date | undefined;
  days?: number;
}
const Planner = styled.div`
  box-shadow: ${shadows.md};
  border-bottom-left-radius: ${borderRadius.md};
  border-bottom-right-radius: ${borderRadius.md};
`;

const StayPlanner = ({
  price,
  setToggle,
  startDate,
  endDate,
  guests,
  setGuests,
  handleDateSelect,
}: IStayCalculator) => {
  return (
    <Planner>
      <Stack>
        <Box
          borderRadiusT
          padding={"1rem"}
          color="var(--cool-gray-9)"
          background="var(--cool-gray-2)"
        >
          <Heading.H5 size="l">Your Stay</Heading.H5>
        </Box>
        <Box padding={"2rem"} borderRadiusB background="var(--cool-gray-1)">
          <span>
            <Emphasize>$ {price}</Emphasize> per night
          </span>
          <form>
            <Box padding={"0.5rem"}>
              <Label> Guests </Label>
              <Input
                onChange={(e) => setGuests(e.target.value)}
                placeholder="How many guests?"
                value={guests}
                min={1}
                type="number"
              />
            </Box>
            <Box padding={"0.5rem"}>
              <Label>How long are you staying?</Label>
              <StayDatePicker
                minDate={startDate}
                placeholderText="Select Dates"
                selected={startDate}
                startDate={startDate}
                endDate={endDate}
                onChange={handleDateSelect}
                dateFormat="dd/MM/yyyy"
                selectsRange
              />
            </Box>
          </form>
          <PrimaryButton
            onClick={() => {
              setToggle();
            }}
            full
            size="md"
          >
            Enquire
          </PrimaryButton>
        </Box>
      </Stack>
    </Planner>
  );
};

export default StayPlanner;
