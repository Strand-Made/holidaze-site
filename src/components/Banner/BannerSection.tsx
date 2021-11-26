import styled from "styled-components";
import { borderRadius } from "../../globalStyle/_variables";
import { mediaQueries } from "../../utils/styleHelpers";

interface IBannerSection {
  image?: string;
}

const BannerSection = styled.div<IBannerSection>`
  display: flex;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.9164040616246498) 7%,
      rgba(9, 9, 121, 0) 44%
    ),
    url(${(props) => props.image && props.image});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 400px;
  color: var(--cool-gray-1);
  border-radius: ${borderRadius.md};
  padding: 1rem;
  ${mediaQueries("md")`
    padding: 1rem 4rem;
  `}
`;

export default BannerSection;
