import Heading from "../Typography/Heading";
import BannerSection from "./BannerSection";
import FlexContainer from "../layout/utilities/Flex/FlexContainer";
import { Link } from "react-router-dom";
import BannerButton from "../BannerButton/BannerButton";
import FlexEnd from "../layout/utilities/Flex/FlexEnd";

interface IBanner {
  image: string;
  heading: string;
  to: string;
  linkText: string;
}

const Banner = ({ image, heading, to, linkText }: IBanner) => {
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
