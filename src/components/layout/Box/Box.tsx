import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { borderRadius, shadows } from "../../../globalStyle/_variables";
import { SpacingScale } from "../../../utils/globalTypes";

interface IBox {
  children: ReactNode;
  padding?: SpacingScale;
  borderRadius?: boolean;
  borderRadiusT?: boolean;
  borderRadiusB?: boolean;
  color?: string;
  background?: string;
  shadow?: boolean;
  style?:
    | {
        "--padding": SpacingScale;
      }
    | any;
}

const StyledBox = styled.div<IBox>`
  border-radius: ${(props) => props.borderRadius && `${borderRadius.md}`};
  box-shadow: ${(props) => props.shadow && `${shadows.sm}`};
  ${(props) => {
    return (
      props.borderRadiusT &&
      css`
        border-top-left-radius: ${borderRadius.md};
        border-top-right-radius: ${borderRadius.md};
      `
    );
  }}
  ${(props) => {
    return (
      props.borderRadiusB &&
      css`
        border-bottom-left-radius: ${borderRadius.md};
        border-bottom-right-radius: ${borderRadius.md};
      `
    );
  }}
  padding: var(--padding, 0);
  color: ${(props) => (props.color ? props.color : "inherit")};
  background: ${(props) => (props.background ? props.background : "inherit")};
`;

const Box = ({
  children,
  padding,
  borderRadius,
  borderRadiusT,
  borderRadiusB,
  color,
  background,
  shadow,
}: IBox) => {
  return (
    <StyledBox
      borderRadius={borderRadius}
      borderRadiusT={borderRadiusT}
      borderRadiusB={borderRadiusB}
      color={color}
      background={background}
      shadow={shadow}
      style={{
        "--padding": padding,
      }}
    >
      {children}
    </StyledBox>
  );
};

export default Box;
