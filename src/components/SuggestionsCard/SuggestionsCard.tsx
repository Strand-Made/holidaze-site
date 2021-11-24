import { Link } from "react-router-dom";
import styled from "styled-components";
import { borderRadius } from "../../globalStyle/_variables";
import { mediaQueries } from "../../utils/styleHelpers";
import { PrimaryButton } from "../Button/Button";

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

const ButtonContainer = styled.div`
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
        <ButtonContainer>
          <PrimaryButton invert size="md">
            <span>{title}</span>
          </PrimaryButton>
        </ButtonContainer>
      </ImageContainer>
    </SuggestionContainer>
  );
};

export default SuggestionsCard;
