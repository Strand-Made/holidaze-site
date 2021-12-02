import { ReactNode } from "react";
import styled from "styled-components";
import { borderRadius } from "../../../globalStyle/_variables";
import Box from "../../layout/Box/Box";

type ISmallBanner = {
  children: ReactNode;
};

const StyledSmallBanner = styled.div`
  background: white;
  border-radius: ${borderRadius.md};
  max-width: 300px;
  svg {
    flex-shrink: 0;
  }
`;

const InfoBanner = ({ children }: ISmallBanner) => {
  return (
    <StyledSmallBanner>
      <Box borderRadius padding={"2rem"}>
        {children}
      </Box>
    </StyledSmallBanner>
  );
};

export default InfoBanner;
