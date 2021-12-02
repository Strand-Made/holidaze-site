import React from "react";
import { mediaQueries } from "../../../utils/styleHelpers";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(NavLink)<NavLinkProps>`
  display: block;
  position: relative;
  padding: 1rem;
  border-radius: 8px;
  color: var(--cool-gray-5);
  &:hover {
    background: var(--cool-gray-2);
    color: var(--cool-gray-9);
  }

  &.active {
    font-weight: 600;
    background: var(--cool-gray-2);
    color: var(--cool-gray-8);
    ${mediaQueries("sm")`
    ::after {
      position: absolute;
      height: 1px;
      bottom: 10px;
      left: 0;
      right: 0;
      width: 40px;
      margin: 0 auto;
      content: "";
      border-bottom: 3px solid var(--cool-gray-9);
     
    }
  }
    `}

    ${mediaQueries("sm")`
    &.active{
      background: none;
      
    }
    ::after {
      position: absolute;
      height: 0px;
      bottom: 10px;
      left: 0;
      right: 0;
      width: 0px;
      margin: 0 auto;
      content: "";
      border-bottom: 3px solid var(--cool-gray-9);
      transition: all 0.5s ease-in-out;
    }
    :hover {
      background: none;
      &::after {
        height: 1px;
        width: 40px;
      
      }
    }
  `}
  }
`;
interface NavLinkProps {
  children: React.ReactNode;
  mobile?: boolean;
  to: string | object;
  onClick?: any;
}

const NavLinks = ({ children, to, onClick }: NavLinkProps) => {
  return (
    <Link onClick={onClick} to={to}>
      {children}
    </Link>
  );
};

export default NavLinks;
