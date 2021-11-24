import { ReactNode } from "react";
import styled from "styled-components";
import { HeroSection } from "../layout/Hero/Hero";
import { fontSize } from "../../utils/styleHelpers";
import { fontSizes } from "../../globalStyle/_variables";

interface HeadingProps {
  size?: keyof typeof fontSizes;
  color?: string;
  weight?: "300" | "400" | "700";
  children: ReactNode;
}
const H1 = styled.h1<HeadingProps>`
  font-size: ${(props) => props.size && fontSize(props.size)};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  ${HeroSection} & {
    font-family: "Abril Fatface", cursive;
    color: var(--cool-gray-9);
    letter-spacing: 1.3px;
    text-align: center;
  }
`;
const H2 = styled.h2<HeadingProps>`
  font-size: ${(props) => props.size && fontSize(props.size)};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
`;
const H3 = styled.h3<HeadingProps>`
  font-size: ${(props) => props.size && fontSize(props.size)};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
`;
const H4 = styled.h4<HeadingProps>`
  font-size: ${(props) => props.size && fontSize(props.size)};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
`;
const H5 = styled.h5<HeadingProps>`
  font-size: ${(props) => props.size && fontSize(props.size)};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
`;
const H6 = styled.h6<HeadingProps>`
  font-size: ${(props) => props.size && fontSize(props.size)};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
`;

const Heading = ({ size, color, children }: HeadingProps) => {
  return (
    <H1 color={color} size={size}>
      {children}
    </H1>
  );
};
Heading.H2 = H2;
Heading.H3 = H3;
Heading.H4 = H4;
Heading.H5 = H5;
Heading.H6 = H6;

export default Heading;
