import styled from "styled-components";
import { mediaQueries } from "../../../utils/styleHelpers";
import Logo from "../Logo/Logo";
import Heading from "../../Typography/Heading";
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
      <Logo white />
      <Container>
        <Flex>
          <Box>
            <Footerlink to="/establishments">
              <Heading.H6 weight="400" size="l">
                Establishments
              </Heading.H6>
            </Footerlink>
          </Box>
          <Box>
            <Footerlink to="/contact">
              <Heading.H6 weight="400" size="l">
                Contact
              </Heading.H6>
            </Footerlink>
          </Box>
          <Box>
            <Footerlink to="/login">
              <Heading.H6 weight="400" size="l">
                Login
              </Heading.H6>
            </Footerlink>
          </Box>
        </Flex>
      </Container>
    </FooterMain>
  );
};

export default Footer;
