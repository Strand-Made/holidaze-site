import { Link } from "react-router-dom";
import styled from "styled-components";
import { borderRadius } from "../../globalStyle/_variables";
import { mediaQueries } from "../../utils/styleHelpers";
import BannerButton from "../BannerButton/BannerButton";

interface SuggestionProps {
  title: string;
  img: string;
  imgDesc: string;
  slug: string;
}

const SuggestionContainer = styled(Link)`
  width: 100%;
  transition-property: transform, opacity;
  transition-duration: 0.2s;
  transition-timing-function: ease-out;
  backface-visibility: hidden;
  :hover,
  :focus {
    transform: scale(1.02);
    opacity: 0.8;
  }
`;
const ImageContainer = styled.div`
  position: relative;
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
        <BannerButton absolute right={1} bottom={1}>
          {title}
        </BannerButton>
      </ImageContainer>
    </SuggestionContainer>
  );
};

export default SuggestionsCard;
