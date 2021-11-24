import { ReactNode } from "react";
import styled from "styled-components";

const SectionLayout = styled.section``;
type SectionProp = {
  children: ReactNode;
};

const Section = ({ children }: SectionProp) => {
  return <SectionLayout>{children}</SectionLayout>;
};

export default Section;
