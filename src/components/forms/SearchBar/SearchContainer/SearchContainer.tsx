import { ReactNode } from "react";
import styled from "styled-components";
import Box from "../../../layout/Box/Box";

interface ISearchContainer {
  children: ReactNode;
}
export const StyledSearchContainer = styled.div`
  background: var(--cool-gray-1);
  border-radius: inherit;
`;
const SearchContainer = ({ children }: ISearchContainer) => {
  return (
    <StyledSearchContainer>
      <Box padding={"1rem"} borderRadius>
        {children}
      </Box>
    </StyledSearchContainer>
  );
};

export default SearchContainer;
