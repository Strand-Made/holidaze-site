import styled from "styled-components";
import Heading from "../Typography/Heading";
import BannerSection from "./BannerSection";
import FlexContainer from "../layout/utilities/Flex/FlexContainer";
import { Link } from "react-router-dom";
import BannerButton from "../BannerButton/BannerButton";

const FlexEnd = styled.div`
  align-self: flex-end;
`;

const Banner = ({ image, heading, to, linkText }) => {
  return (
    <Link to={to}>
      <BannerSection image={image}>
        <FlexContainer flexGrow={"1"} col justifyContent={"space-between"}>
          <Heading.H3 weight="700" size="2xl">
            {heading}
          </Heading.H3>
          <FlexEnd>
            <BannerButton>{linkText}</BannerButton>
          </FlexEnd>
        </FlexContainer>
      </BannerSection>
    </Link>
  );
};

export default Banner;
