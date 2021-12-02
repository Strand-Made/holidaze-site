import { Link } from "react-router-dom";
import FlexContainer from "../../layout/utilities/Flex/FlexContainer";
import Image from "../../layout/Image/Image";
import Heading from "../../Typography/Heading";
import Demphasize from "../../Typography/DeEmphasize";
import Frame from "../../layout/utilities/Frame/Frame";
import Box from "../../layout/Box/Box";

interface EstablishmentPropTypes {
  img?: string;
  title?: string;
  price?: number;
  slug: string;
  id?: number;
  altText?: string;
}

const Card = ({ img, title, price, slug, altText }: EstablishmentPropTypes) => {
  return (
    <Box>
      <Box borderRadius>
        <Link to={slug}>
          <Frame>
            <Image src={img} alt={altText ? altText : title} />
          </Frame>
        </Link>
      </Box>
      <FlexContainer justifyContent="space-between" alignItems="center">
        <Heading.H2 weight="400" size="l">
          {title}
        </Heading.H2>
        <Box>
          <Heading.H3 color="var(--cool-gray-9)">
            ${price} <Demphasize>/ night</Demphasize>
          </Heading.H3>
        </Box>
      </FlexContainer>
    </Box>
  );
};

export default Card;
