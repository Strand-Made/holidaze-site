import styled from "styled-components";
import { borderRadius } from "../../../globalStyle/_variables";
import { StyledSearchContainer } from "../SearchBar/SearchContainer/SearchContainer";

const Input = styled.input`
  border: 2px solid var(--cool-gray-2);
  padding: 0.5rem;
  background: white;
  width: 100%;
  border-radius: ${borderRadius.md};
  outline: none;
  transition: var(--animate-input);
  &:focus {
    border: 2px solid var(--cool-gray-9);
  }

  ${StyledSearchContainer} & {
    background: inherit;
    border: none;
    flex-grow: 1;
  }
`;

export default Input;
