import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import FlexContainer from "../../layout/utilities/Flex/FlexContainer";
import Image from "../../layout/Image/Image";
import Demphasize from "../../Typography/DeEmphasize";
import Frame from "../../layout/utilities/Frame/Frame";
import Box from "../../layout/Box/Box";
import Stack from "../../layout/Stack/Stack";
import Spacer from "../../layout/utilities/Spacer/Spacer";
import Paragraph from "../../Typography/Paragraph";

interface EstablishmentPropTypes {
  img: string;
  title: string;
  price: number;
  slug: string;
  altText?: string;
}

const EstablishmentCardImage = styled.div`
  transition-property: transform, opacity;
  transition-duration: 0.2s;
  transition-timing-function: ease-out;
  backface-visibility: hidden;
  :hover {
    transform: scale(1.02);
    opacity: 0.8;
  }
`;

const Card = ({ img, title, price, slug, altText }: EstablishmentPropTypes) => {
  return (
    <Box>
      <EstablishmentCardImage>
        <Link to={slug}>
          <Frame>
            <Image borderRadius src={img} alt={altText ? altText : title} />
          </Frame>
        </Link>
      </EstablishmentCardImage>
      <Spacer mt="0.75" />
      <FlexContainer justifyContent="space-between" alignItems="center">
        <Paragraph weight="400" size="l">
          {title}
        </Paragraph>
        <Box>
          <Stack>
            <Demphasize>from</Demphasize>
            <Paragraph weight="600" size="l" color="var(--cool-gray-9)">
              <Demphasize fontSize="1rem">$ </Demphasize> {price}
              <Demphasize fontSize="1rem"> per night</Demphasize>
            </Paragraph>
          </Stack>
        </Box>
      </FlexContainer>
    </Box>
  );
};

export default Card;
