import styled from "styled-components";
import { borderRadius } from "../../../globalStyle/_variables";

const Select = styled.select`
  border: 1px solid var(--cool-gray-2);
  padding: 0.5rem;
  background: white;
  border-radius: ${borderRadius.md};
  outline: none;
  &:focus {
    border: 1px solid var(--cool-gray-3);
  }
`;

export default Select;
