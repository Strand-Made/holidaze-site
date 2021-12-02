import { ReactNode } from "react";
import styled from "styled-components";
import { shadows } from "../../globalStyle/_variables";
import { buttonSizes } from "../Button/Button";

interface IBannerButton {
  children?: ReactNode;
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
  absolute?: boolean;
}

const TitleBox = styled.div`
  display: inline-block;
  background: var(--cool-gray-1);
  font-size: 1rem;
  }};
  color: var(--blue-6);
  font-weight: 600;
  border-radius: 8px;
  padding: ${buttonSizes.md};
  box-shadow: ${shadows.md};
  `;

const TitleContainer = styled.div<IBannerButton>`
  position: ${(props) => (props.absolute ? "absolute" : "")};
  bottom: ${(props) => props.bottom && `${props.bottom}rem`};
  left: ${(props) => props.left && `${props.left}rem`};
  right: ${(props) => props.right && `${props.right}rem`};
  top: ${(props) => props.top && `${props.top}rem`};
`;

const BannerButton = ({
  children,
  left,
  top,
  right,
  bottom,
  absolute,
}: IBannerButton) => {
  return (
    <TitleContainer
      absolute={absolute}
      left={left}
      right={right}
      top={top}
      bottom={bottom}
    >
      <TitleBox>{children}</TitleBox>
    </TitleContainer>
  );
};

export default BannerButton;
