import styled from "styled-components";
import { useAuth } from "../../../../context/AuthContext";
import NavLinks from "../NavLinks";
import { mediaQueries } from "../../../../utils/styleHelpers";
import FlexContainer from "../../utilities/Flex/FlexContainer";
import { shadows } from "../../../../globalStyle/_variables";
import LinkButton from "../../../Button/LinkButton";
import { SecondaryButton } from "../../../Button/Button";

interface IMobileNavProps {
  isToggled: boolean;
  setIsToggled?: any;
}

const MobileMenuContainer = styled.div<IMobileNavProps>`
  position: absolute;
  z-index: 10;
  box-shadow: ${shadows.lg};
  background: white;
  padding: 1.25rem;
  left: 0;
  width: 100%;
  height: 100%;
  transform: ${(props) =>
    props.isToggled ? "translateX(0)" : "translateX(-1000px)"};
  transition: var(--animate-transf);

  ${mediaQueries("sm")`
  display: none;
  `}
`;
const MobileNavList = styled.ul`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  background: white;
`;

const MobileNavItem = styled.li`
  width: 100%;
`;

const MobileNav = ({ isToggled, setIsToggled }: IMobileNavProps) => {
  const { auth, setAuth } = useAuth();
  return (
    <>
      <MobileMenuContainer isToggled={isToggled}>
        {isToggled ? (
          <>
            <MobileNavList role="menu" aria-roledescription="mobile menu">
              <FlexContainer col gap="1rem">
                <MobileNavItem>
                  <NavLinks onClick={setIsToggled} mobile to="/">
                    Home
                  </NavLinks>
                </MobileNavItem>
                <MobileNavItem>
                  <NavLinks onClick={setIsToggled} mobile to="/establishments">
                    Establishments
                  </NavLinks>
                </MobileNavItem>
                <MobileNavItem>
                  <NavLinks onClick={setIsToggled} mobile to="/contact">
                    Contact
                  </NavLinks>
                </MobileNavItem>
                {auth && (
                  <MobileNavItem>
                    <NavLinks onClick={setIsToggled} mobile to="/admin">
                      Admin
                    </NavLinks>
                  </MobileNavItem>
                )}
              </FlexContainer>
            </MobileNavList>
            <FlexContainer justifyContent="end">
              {auth ? (
                <SecondaryButton
                  onClick={() => {
                    setAuth(null);
                    setIsToggled();
                  }}
                  size="md"
                >
                  Log Out
                </SecondaryButton>
              ) : (
                <LinkButton onClick={setIsToggled} to="/login" size="sm">
                  Login
                </LinkButton>
              )}
            </FlexContainer>
          </>
        ) : null}
      </MobileMenuContainer>
    </>
  );
};

export default MobileNav;
