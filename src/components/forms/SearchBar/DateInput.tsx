import styled from "styled-components";
import { HiOutlineCalendar } from "react-icons/hi";
import FlexContainer from "../../layout/utilities/Flex/FlexContainer";
import Input from "../Input/Input";
import Label from "../Label/Label";
import InputContainer from "../Input/InputContainer";

const DateInputContainer = styled(InputContainer)``;

const DateInput = () => {
  return (
    <DateInputContainer>
      <FlexContainer gap="0.75rem">
        <FlexContainer col>
          <Label>
            <HiOutlineCalendar color="var(--cool-gray-6)" size={25} />
            <span>Check In</span>
          </Label>
          <Input placeholder="30 October" />
        </FlexContainer>
        <FlexContainer col>
          <Label>
            <HiOutlineCalendar color="var(--cool-gray-6)" size={25} />
            <span>Check In</span>
          </Label>
          <Input placeholder="30 October" />
        </FlexContainer>
      </FlexContainer>
    </DateInputContainer>
  );
};

export default DateInput;
