import { HiOutlineLocationMarker } from "react-icons/hi";
import FlexContainer from "../../layout/utilities/Flex/FlexContainer";
import Input from "../Input/Input";
import InputContainer from "../Input/InputContainer";
import Label from "../Label/Label";

const HotelInput = () => {
  return (
    <InputContainer>
      <FlexContainer col>
        <Label>
          <HiOutlineLocationMarker color="var(--cool-gray-6)" size={25} />
          <span>Hotel</span>
        </Label>
        <Input placeholder="Where are you staying?" />
      </FlexContainer>
    </InputContainer>
  );
};

export default HotelInput;
