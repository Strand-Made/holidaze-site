import styled from "styled-components";
import { mediaQueries } from "../../../utils/styleHelpers";
import Logo from "../Logo/Logo";
import Box from "../Box/Box";
import Container from "../Container/Container";
import Footerlink from "./FooterlInk/Footerlink";

const FooterMain = styled.footer`
  background: var(--teal-6);
  color: var(--teal-1);
  padding: 2rem 2rem;
  ${mediaQueries("md")`
  padding: 5rem 2rem;
  `}
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  ${mediaQueries("sm")`
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  gap: 10rem;
  `}
`;

const Footer = () => {
  return (
    <FooterMain>
      <Container>
        <Logo white />
        <Flex>
          <Box>
            <Footerlink to="/establishments">
              <span>Establishments</span>
            </Footerlink>
          </Box>
          <Box>
            <Footerlink to="/contact">
              <span>Contact</span>
            </Footerlink>
          </Box>
          <Box>
            <Footerlink to="/login">
              <span>Login</span>
            </Footerlink>
          </Box>
        </Flex>
      </Container>
    </FooterMain>
  );
};

export default Footer;
