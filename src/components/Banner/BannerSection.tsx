import styled from "styled-components";
import { borderRadius } from "../../globalStyle/_variables";
import { mediaQueries } from "../../utils/styleHelpers";

const BannerSection = styled.div`
  background: var(--teal-3);
  color: var(--teal-6);
  border-radius: ${borderRadius.md};
  padding: 1rem;
  ${mediaQueries("md")`
    padding: 1rem 4rem;
  `}
`;

export default BannerSection;
