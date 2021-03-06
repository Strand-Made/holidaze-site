import { ReactNode } from "react";
import styled from "styled-components";
import { borderRadius, shadows } from "../../../globalStyle/_variables";
import { SpacingScale } from "../../../utils/globalTypes";
import { mediaQueries } from "../../../utils/styleHelpers";

interface IPopover {
  position?: "absolute" | "sticky" | "fixed";
  children: ReactNode;
  margin?: SpacingScale;
}
type TContain = {
  margin?: SpacingScale;
};

const StyledPopover = styled.div<IPopover>`
  --position: ${(props) => (props.position ? props.position : "absolute")};
  position: var(--position);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${mediaQueries("md")`
  width: 600px;
  `}
`;
const Contain = styled.div<TContain>`
  --margin: ${(props) => (props.margin ? props.margin : "0")};
  min-width: 300px;
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
