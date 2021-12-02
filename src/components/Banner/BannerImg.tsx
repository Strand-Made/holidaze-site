import styled from "styled-components";
import { borderRadius } from "../../globalStyle/_variables";
import { mediaQueries } from "../../utils/styleHelpers";

const BannerImg = styled.img`
  border-radius: ${borderRadius.md};
  width: 100%;
  ${mediaQueries("md")`
height: 260px;
object-fit: cover;
`}
`;

export default BannerImg;
