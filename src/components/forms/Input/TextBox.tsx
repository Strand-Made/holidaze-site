import styled from "styled-components";
import { borderRadius } from "../../../globalStyle/_variables";

const TextBox = styled.textarea`
  width: 100%;
  background: white;
  border: 2px solid var(--cool-gray-2);
  border-radius: ${borderRadius.sm};
  padding: 0.5rem;
  resize: none;
  outline: none;
  transition: var(--animate-input);
  &:focus {
    border: 2px solid var(--cool-gray-9);
  }
`;

export default TextBox;
