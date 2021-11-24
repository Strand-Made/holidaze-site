import { ReactNode } from "react";
import styled from "styled-components";

interface IFrame {
  children: ReactNode;
}

const StyledFrame = styled.div<IFrame>`
  --w: 3;
  --d: 4;
  padding-bottom: calc(var(--w) / var(--d) * 100%);
  position: relative;

  & > * {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Frame = ({ children }: IFrame) => {
  return <StyledFrame>{children}</StyledFrame>;
};

export default Frame;
