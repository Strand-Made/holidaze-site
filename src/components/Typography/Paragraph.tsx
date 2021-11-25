import { ReactNode } from "react";
import styled from "styled-components";

interface IParagraph {
  children: ReactNode;
  truncate?: boolean;
}

const StyledParagraph = styled.p<IParagraph>`
  &.truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const Paragraph = ({ children, truncate }: IParagraph) => {
  return (
    <StyledParagraph
      className={`${truncate && "truncate"}`}
      truncate={truncate}
    >
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
