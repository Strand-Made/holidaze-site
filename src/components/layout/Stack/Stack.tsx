import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { SpacingScale } from "../../../utils/globalTypes";

interface IStack {
  children: ReactNode;
  space?: SpacingScale;
  splitAfter?: number;
}

const StyledStack = styled.div<IStack>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  & > * {
    margin-top: ${(props) => (props.space ? props.space : 0)};
    margin-bottom: ${(props) => (props.space ? props.space : 0)};
  }

  }}

  ${(props) => {
    return (
      props.splitAfter &&
      css`
        &:only-child {
          height: 100%;
        }
        & > :nth-child(${props.splitAfter}) {
          margin-bottom: auto;
        }
      `
    );
  }}
`;

const Stack = ({ children, space, splitAfter }: IStack) => {
  return (
    <StyledStack space={space} splitAfter={splitAfter}>
      {children}
    </StyledStack>
  );
};

export default Stack;
