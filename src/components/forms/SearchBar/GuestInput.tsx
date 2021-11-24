import { HiOutlineUsers } from "react-icons/hi";
import FlexContainer from "../../layout/utilities/Flex/FlexContainer";
import Label from "../Label/Label";
import InputContainer from "../Input/InputContainer";

const GuestInput = () => {
  return (
    <InputContainer>
      <FlexContainer col>
        <Label>
          <HiOutlineUsers color="var(--cool-gray-6)" size={25} />
          <span>Guests</span>
        </Label>
      </FlexContainer>
    </InputContainer>
  );
};

export default GuestInput;
