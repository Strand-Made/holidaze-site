import styled from "styled-components";
import Heading from "../Typography/Heading";
import BannerSection from "./BannerSection";
import FlexContainer from "../layout/utilities/Flex/FlexContainer";
import LinkButton from "../Button/LinkButton";
import Box from "../layout/Box/Box";

const FlexEnd = styled.div`
  align-self: flex-end;
`;

const Banner = ({ image, heading, to, linkText }) => {
  return (
    <BannerSection image={image}>
      <FlexContainer flexGrow={"1"} col justifyContent={"space-between"}>
        <Heading.H3 weight="700" size="2xl">
          {heading}
        </Heading.H3>
        <FlexEnd>
          <Box>
            <LinkButton invert size="md" to={to}>
              {linkText}
            </LinkButton>
          </Box>
        </FlexEnd>
      </FlexContainer>
    </BannerSection>
  );
};

export default Banner;
