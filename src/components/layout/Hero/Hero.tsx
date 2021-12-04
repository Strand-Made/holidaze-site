import styled from "styled-components";
import { ReactNode } from "react";
import { mediaQueries } from "../../../utils/styleHelpers";
import HeroContent from "./HeroContent";
import hero from "../../../assets/herowebp.webp";
import Heading from "../../Typography/Heading";

type HeroProps = {
  children: ReactNode;
};

export const HeroSection = styled.section`
  background-image: url(${hero});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: scroll;
  height: 500px;
  padding-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  margin: 0 auto;
  ${mediaQueries("md")`
  max-width: 1100px;
  border-radius: 8px;
  padding: 6rem;
  `}
  ${mediaQueries("lg")`
  max-width: 1200px;
  `}
`;

const Hero = ({ children }: HeroProps) => {
  return (
    <HeroSection>
      <HeroContent>
        <Heading size="4xl">Experience Bergen with Holidaze</Heading>
        {children}
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
