import { Link } from "react-router-dom";
import styled from "styled-components";
import { mediaQueries } from "../../../utils/styleHelpers";
import Logo from "../../Logo/Logo";
import Heading from "../../Typography/Heading";
import Box from "../Box/Box";
import Container from "../Container/Container";

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
  align-items: flex-start;
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
            <Heading.H6 weight="400" size="l">
              Get Notified
            </Heading.H6>
          </Box>
          <Box>
            <Link to="/establishments">
              <Heading.H6 weight="400" size="md">
                Establishments
              </Heading.H6>
            </Link>
          </Box>
          <Box>
            <Link to="/contact">
              <Heading.H6 weight="400" size="md">
                Contact
              </Heading.H6>
            </Link>
          </Box>
        </Flex>
      </Container>
    </FooterMain>
  );
};

export default Footer;
