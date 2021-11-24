import styled from "styled-components";
import { borderRadius } from "../../../globalStyle/_variables";

const DisabledInput = styled.input`
  border: 1px solid var(--cool-gray-2);
  padding: 0.5rem;
  background: white;
  border-radius: ${borderRadius.md};
  :hover {
    cursor: not-allowed;
  }
`;

export default DisabledInput;
