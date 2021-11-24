import { ReactNode } from "react";
import styled from "styled-components";

interface IAside {
  children: ReactNode;
  asideWidth?: number;
  minWidth: number;
  space?: number;
}

const StyledAside = styled.div<IAside>`
  --gap: ${(props) => props.space}rem;
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap, 0.5rem);

  & > :last-child {
    flex-basis: ${(props) => (props.asideWidth ? props.asideWidth : "0")}px;
    flex-grow: 1;
  }
  & > :first-child {
    flex-basis: 0;
    flex-grow: 999;
    min-width: ${(props) => props.minWidth && props.minWidth}%;
  }
`;

const Aside = ({ children, asideWidth, minWidth, space }: IAside) => {
  return (
    <StyledAside minWidth={minWidth} asideWidth={asideWidth} space={space}>
      {children}
    </StyledAside>
  );
};

export default Aside;
