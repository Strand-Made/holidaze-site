import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../../../../utils/styleHelpers";

interface FlexProps {
  col?: boolean;
  gap?:
    | "0.25rem"
    | "0.5rem"
    | "0.75rem"
    | "1rem"
    | "1.5rem"
    | "2rem"
    | "3rem"
    | "4rem"
    | "6rem"
    | "8rem"
    | "12rem"
    | "16rem"
    | "24rem"
    | "32rem";
  justifyContent?:
    | "start"
    | "center"
    | "space-between"
    | "space-around"
    | "end"
    | "space-evenly";
  alignContent?: "start" | "center" | "space-between" | "space-around";
  alignItems?: "stretch" | "center" | "start" | "end" | "baseline";
  wrap?: "wrap" | "wrap-reverse" | "nowrap";
  responsive?: "row" | "column";
  responsiveAlignItems?: "stretch" | "center" | "start" | "end";
  flexGrow?: "1" | "0";
  children: React.ReactNode;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => (props.col ? "column" : "row")};
  align-content: ${(props) => props.alignContent};
  gap: ${(props) => props.gap};
  flex-wrap: ${(props) => props.wrap};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  ${(props) =>
    mediaQueries("md")(`
  flex-direction: ${props.responsive ? props.responsive : ""};
  align-items: ${props.responsiveAlignItems ? props.responsiveAlignItems : ""};
  `)}
  flex-grow: ${(props) => props.flexGrow && props.flexGrow};
`;

const FlexContainer = ({
  col,
  gap,
  justifyContent,
  alignContent,
  alignItems,
  responsive,
  responsiveAlignItems,
  wrap,
  flexGrow,
  children,
}: FlexProps) => {
  return (
    <Flex
      col={col}
      gap={gap}
      alignItems={alignItems}
      justifyContent={justifyContent}
      responsiveAlignItems={responsiveAlignItems}
      alignContent={alignContent}
      responsive={responsive}
      flexGrow={flexGrow}
      wrap={wrap}
    >
      {children}
    </Flex>
  );
};

export default FlexContainer;
