import styled, { css } from "styled-components";
import { borderRadius } from "../../../globalStyle/_variables";
import { mediaQueries } from "../../../utils/styleHelpers";

interface IImage {
  src: string;
  alt: string;
  fullWidth?: boolean;
  forceHeight?: boolean;
  height?: number;
  width?: number;
  borderRadius?: boolean;
}

const StyledImage = styled.img<IImage>`
  width: 100%;
  object-fit: cover;
  border-radius: ${(props) => (props.borderRadius ? borderRadius.md : null)};
  min-height: ${(props) => (props.forceHeight ? "100%" : "")};
  ${(props) => {
    return (
      props.fullWidth &&
      css`
        left: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
        max-width: 100vw;
        position: relative;
        right: 50%;
        width: 100vw;
        ${mediaQueries("md")`
        border-radius: inherit;
        width: 100%;
        max-width: 100%;
        position: static;
        margin: 0 auto;

        `}
      `
    );
  }};
`;

const Image = ({
  src,
  alt,
  fullWidth,
  forceHeight,
  width,
  height,
  borderRadius,
}: IImage) => {
  return (
    <StyledImage
      borderRadius={borderRadius}
      forceHeight={forceHeight}
      fullWidth={fullWidth}
      alt={alt}
      src={src}
      width={width}
      height={height}
    />
  );
};

export default Image;
