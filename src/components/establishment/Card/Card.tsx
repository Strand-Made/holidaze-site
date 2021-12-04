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

const EstablishmentCard = styled(Link)`
  color: inherit;
  transition-property: transform, opacity;
  transition-duration: 0.2s;
  transition-timing-function: ease-out;
  backface-visibility: hidden;
  :hover {
    transform: scale(1.02);
    opacity: 0.9;
  }
`;

const EstablishmentCardImage = styled.div``;

const Card = ({ img, title, price, slug, altText }: EstablishmentPropTypes) => {
  return (
    <EstablishmentCard to={slug}>
      <Box>
        <EstablishmentCardImage>
          <Frame>
            <Image borderRadius src={img} alt={altText ? altText : title} />
          </Frame>
        </EstablishmentCardImage>
        <Spacer mt="0.75" />
        <FlexContainer justifyContent="space-between" alignItems="center">
          <Paragraph weight="600" size="l">
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
    </EstablishmentCard>
  );
};

export default Card;
