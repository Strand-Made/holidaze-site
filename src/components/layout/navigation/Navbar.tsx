import styled from "styled-components";
import useToggle from "../../../hooks/useToggle";
import { useAuth } from "../../../context/AuthContext";
import { mediaQueries } from "../../../utils/styleHelpers";
import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav/MobileNav";
import { HiMenu, HiX } from "react-icons/hi";
import Container from "../Container/Container";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  padding: 0.25rem 0;
`;
const NavList = styled.ul`
  display: none;
  ${mediaQueries("sm")`
  display: flex;
`}
`;
const ButtonContainer = styled.div`
  display: none;
  ${mediaQueries("sm")`
  display: block;
  `}
`;

const ToggleMenuBtn = styled.button`
  display: flex;
  background: var(--cool-gray-2);
  border-radius: 1000px;
  height: 40px;
  width: 40px;
  padding: 0.5rem;
  ${mediaQueries("sm")`
  display: none;
  `}
`;

const Navbar = () => {
  const [isToggled, setIsToggled] = useToggle();
  const { auth, setAuth } = useAuth();
  return (
    <Container>
      <Header>
        <Logo />
        <Nav>
          <NavList>
            <li>
              <NavLinks to="/">Home</NavLinks>
            </li>
            <li>
              <NavLinks to="/establishments">Establishments</NavLinks>
            </li>
            <li>
              <NavLinks to="/contact">Contact</NavLinks>
            </li>
            {auth && (
              <li>
                <NavLinks to="/admin">Admin</NavLinks>
              </li>
            )}
          </NavList>

          <ToggleMenuBtn
            aria-roledescription="Navmenu toggle button"
            onClick={setIsToggled}
          >
            {isToggled ? <HiX size={24} /> : <HiMenu size={24} />}
          </ToggleMenuBtn>
        </Nav>
        <ButtonContainer>
          {auth ? (
            <Link
              to="/"
              onClick={() => {
                setAuth(null);
                setIsToggled();
              }}
            >
              Log Out
            </Link>
          ) : (
            <Link onClick={setIsToggled} to="/login">
              Log in
            </Link>
          )}
        </ButtonContainer>
      </Header>
      <MobileNav setIsToggled={setIsToggled} isToggled={isToggled} />
    </Container>
  );
};

export default Navbar;
