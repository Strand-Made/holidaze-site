import { Link } from "react-router-dom";
import styled from "styled-components";
import { borderRadius, shadows } from "../../globalStyle/_variables";
import { mediaQueries } from "../../utils/styleHelpers";
import { buttonSizes } from "../Button/Button";

interface SuggestionProps {
  title: string;
  img: string;
  imgDesc: string;
  slug: string;
}

const SuggestionContainer = styled(Link)`
  width: 100%;
`;
const ImageContainer = styled.div`
  position: relative;
`;

const TitleBox = styled.div`
  display: inline-block;
  background: var(--cool-gray-1);
  font-size: 1rem;
  }};
  color: var(--blue-6);
  font-weight: 600;
  border-radius: 8px;
  padding: ${buttonSizes.md};
  box-shadow: ${shadows.md};
  `;

const TitleContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
`;
const Image = styled.img`
  width: 100%;
  border-radius: ${borderRadius.md};
  ${mediaQueries("md")`
  height: 220px;
  `}
`;

const SuggestionsCard = ({ title, img, imgDesc, slug }: SuggestionProps) => {
  const link = `/establishments?Slug=${slug}`;
  return (
    <SuggestionContainer to={link}>
      <ImageContainer>
        <Image width="300" src={img} alt={imgDesc} />
        <TitleContainer>
          <TitleBox>
            <span>{title}</span>
          </TitleBox>
        </TitleContainer>
      </ImageContainer>
    </SuggestionContainer>
  );
};

export default SuggestionsCard;
