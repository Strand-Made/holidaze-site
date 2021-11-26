import styled from "styled-components";
import { CheckboxContainer } from "../Input/Checkbox/Checkbox";

const Label = styled.label`
  display: flex;
  color: var(--cool-gray-7);
  align-items: baseline;
  font-weight: 400;

  ${CheckboxContainer} & {
    display: grid;
    grid-template-columns: 1rem auto;
    gap: 0.5rem;
  }
`;

export default Label;
