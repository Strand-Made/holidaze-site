import { ReactNode } from "react";
import styled from "styled-components";
import { fontSizes } from "../../globalStyle/_variables";
import { fontSize } from "../../utils/styleHelpers";

interface IParagraph {
  children: ReactNode;
  truncate?: boolean;
  color?: string;
  weight?: "400" | "500" | "600";
  size?: keyof typeof fontSizes;
}

const StyledParagraph = styled.p<IParagraph>`
  font-weight: ${(props) => props.weight && props.weight};
  font-size: ${(props) => props.size && fontSize(props.size)};
  color: ${(props) => props.color && props.color};
  &.truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const Paragraph = ({ children, truncate, weight, size, color }: IParagraph) => {
  return (
    <StyledParagraph
      color={color}
      size={size}
      weight={weight}
      className={`${truncate && "truncate"}`}
      truncate={truncate}
    >
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
