import { Link } from "react-router-dom";
import styled from "styled-components";
import { borderRadius } from "../../../globalStyle/_variables";
import FlexContainer from "../../layout/utilities/Flex/FlexContainer";
import Heading from "../../Typography/Heading";
import Demphasize from "../../Typography/DeEmphasize";
import Frame from "../../layout/utilities/Frame/Frame";

interface EstablishmentPropTypes {
  img?: string;
  title?: string;
  price?: number;
  slug: string;
  id?: number;
  altText?: string;
}

const EstablishmentCard = styled.div``;
const CardLink = styled(Link)`
  width: 100%;
`;

const Image = styled.img`
  border-radius: ${borderRadius.md};
  width: 100%;
`;

const Card = ({ img, title, price, slug, altText }: EstablishmentPropTypes) => {
  return (
    <EstablishmentCard>
      <div>
        <CardLink to={`${slug}`}>
          <Frame>
            <Image src={img} alt={altText ? altText : title} />
          </Frame>
        </CardLink>
      </div>
      <FlexContainer justifyContent="space-between" alignItems="center">
        <Heading.H2 weight="400" size="l">
          {title}
        </Heading.H2>
        <div>
          <Heading.H3 color="var(--blue-6)">
            $ {price} <Demphasize>/ Night</Demphasize>
          </Heading.H3>
        </div>
      </FlexContainer>
    </EstablishmentCard>
  );
};

export default Card;
