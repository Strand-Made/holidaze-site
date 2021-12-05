import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { State, To } from "history";
import { buttonSizes } from "./Button";
import { shadows } from "../../globalStyle/_variables";

interface LinkProps {
  children?: ReactNode;
  replace?: boolean;
  state?: State;
  onClick?: any;
  to: To;
  invert?: boolean;
  full?: boolean;
  shadow?: boolean;
  size?: keyof typeof buttonSizes;
}

const StyledLink = styled(Link)<LinkProps>`
  display: block;
  text-align: center;
  background: ${(props) => (props.invert ? "var(--blue-1)" : "var(--blue-5)")};
  font-size: ${(props) => {
    if (props.size === "sm") return "0.833rem";
    if (props.size === "md") return "1rem";
    if (props.size === "l") return "1.4rem";
    return "1rem";
  }};
  color: ${(props) => (props.invert ? "var(--blue-6)" : "var(--blue-1)")};
  font-weight: 600;
  border-radius: 8px;
  width: ${(props) => props.full && "100%"};
  max-width: ${(props) => (props.full ? "100%" : "200px")};
  padding: ${(props) => {
    if (props.size === "sm") return buttonSizes.sm;
    if (props.size === "md") return buttonSizes.md;
    if (props.size === "l") return buttonSizes.l;
  }};
  box-shadow: ${(props) => props.shadow && `${shadows.md}`};
  :active,
  :focus {
    background: var(--blue-5);
    box-shadow: ${shadows.sm};
  }
`;

const LinkButton = ({
  children,
  to,
  replace,
  state,
  onClick,
  size,
  invert,
  shadow,
  full,
}: LinkProps) => {
  return (
    <StyledLink
      size={size}
      onClick={onClick}
      state={state}
      replace={replace}
      to={to}
      invert={invert}
      shadow={shadow}
      full={full}
    >
      {children}
    </StyledLink>
  );
};

export default LinkButton;
