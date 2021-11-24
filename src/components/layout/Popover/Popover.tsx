import { ReactNode } from "react";
import styled from "styled-components";
import { borderRadius, shadows } from "../../../globalStyle/_variables";

interface IPopover {
  position?: "absolute" | "sticky" | "fixed";
  children: ReactNode;
  margin?: "0.5rem" | "1rem" | "1.5rem" | "2rem" | "3rem";
}
type TContain = {
  margin?: "0.5rem" | "1rem" | "1.5rem" | "2rem" | "3rem";
};

const StyledPopover = styled.div<IPopover>`
  --position: ${(props) => (props.position ? props.position : "absolute")};
  position: var(--position);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Contain = styled.div<TContain>`
  --margin: ${(props) => (props.margin ? props.margin : "0.5rem")};
  max-width: calc(100% - var(--margin) * 2);
  max-height: calc(100% - var(--margin) * 2);
  border-radius: ${borderRadius.md};
  box-shadow: ${shadows.lg};
  overflow: hidden;
`;

const Popover = ({ children, position, margin }: IPopover) => {
  return (
    <StyledPopover position={position}>
      <Contain margin={margin}>{children}</Contain>
    </StyledPopover>
  );
};

export default Popover;
