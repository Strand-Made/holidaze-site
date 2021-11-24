import styled from "styled-components";
import { mediaQueries } from "../../utils/styleHelpers";

type LogoProp = {
  href?: string;
  white?: boolean;
};

const LogoLink = styled.a<LogoProp>`
  font-family: "Abril Fatface", crusive;
  font-size: 1.5rem;
  color: ${(props) => (props.white ? "var(--teal-1)" : "var(--cool-gray-9)")};
  ${mediaQueries("md")`
    font-size: 2rem;
  `}
`;
const Logo = ({ white }: LogoProp) => {
  return (
    <LogoLink white={white} href="/">
      Holidaze
    </LogoLink>
  );
};

export default Logo;
