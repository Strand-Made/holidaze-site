import { ReactNode } from "react";
import styled from "styled-components";

interface IParagraph {
  children: ReactNode;
  truncate?: boolean;
  weight?: "400" | "500" | "600";
}

const StyledParagraph = styled.p<IParagraph>`
  font-weight: ${(props) => props.weight && props.weight};
  &.truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const Paragraph = ({ children, truncate, weight }: IParagraph) => {
  return (
    <StyledParagraph
      weight={weight}
      className={`${truncate && "truncate"}`}
      truncate={truncate}
    >
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
