import { ReactNode } from "react";
import styled from "styled-components";

type IconContainerProps = {
  children: ReactNode;
  background?: string;
};

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.background ? props.background : "var(--teal-2)"};
  border-radius: 100%;
  height: 40px;
  width: 40px;
`;

const IconsContainer = ({ children, background }: IconContainerProps) => {
  return <IconContainer background={background}>{children}</IconContainer>;
};

export default IconsContainer;
