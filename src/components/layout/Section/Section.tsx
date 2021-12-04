import { ReactNode } from "react";
import styled from "styled-components";

const SectionLayout = styled.section<SectionProp>`
  background: ${(props) => (props.background ? props.background : "")};
  padding-top: ${(props) => (props.pt ? `${props.pt}rem` : "")};
  padding-bottom: ${(props) => (props.pb ? `${props.pb}rem` : "")};
`;
type SectionProp = {
  children: ReactNode;
  background?: string;
  pt?: number;
  pb?: number;
};

const Section = ({ children, background, pt, pb }: SectionProp) => {
  return (
    <SectionLayout pt={pt} pb={pb} background={background}>
      {children}
    </SectionLayout>
  );
};

export default Section;
