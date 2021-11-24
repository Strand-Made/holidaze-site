import { ReactNode } from "react";
import Container from "../Container/Container";
import FlexContainer from "../utilities/Flex/FlexContainer";

type HeroContentProps = {
  children: ReactNode;
};

const HeroContent = ({ children }: HeroContentProps) => {
  return (
    <Container>
      <FlexContainer col gap="1rem" justifyContent="center" alignItems="center">
        {children}
      </FlexContainer>
    </Container>
  );
};

export default HeroContent;
