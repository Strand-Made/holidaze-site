import { ReactNode } from "react";
import styled from "styled-components";

type TChildren = {
  children: ReactNode;
};

const StyledMain = styled.main`
  flex: 1;
`;

const Main = ({ children }: TChildren) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
