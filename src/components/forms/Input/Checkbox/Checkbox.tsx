import styled from "styled-components";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { useState } from "react";
import { MdOutlineCheck } from "react-icons/md";
import { borderRadius } from "../../../../globalStyle/_variables";

const StyledCheckboxRoot = styled(RadixCheckbox.Root)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--cool-gray-2);
  height: 2rem;
  width: 2rem;
  border-radius: ${borderRadius.sm};
`;
const StyledIndicator = styled(RadixCheckbox.Indicator)`
  color: var(--blue-6);
`;

const Checkbox = ({ value, name }) => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <StyledCheckboxRoot name={name} onClick={handleClick} value={value}>
      <StyledIndicator>
        <MdOutlineCheck size="24" />
      </StyledIndicator>
    </StyledCheckboxRoot>
  );
};

export default Checkbox;
