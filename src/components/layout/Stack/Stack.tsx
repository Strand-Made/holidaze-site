import { ReactNode } from "react";
import styled, { css } from "styled-components";

interface IStack {
  children: ReactNode;
  space?: number;
  splitAfter?: number;
  recursive?: boolean;
}

const StyledStack = styled.div<IStack>`
  --space: ${(props) => props.space}rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  ${(props) => {
    return props.recursive
      ? css`
          & * + * {
            margin-top: var(--space);
          }
        `
      : css`
          & > * + * {
            margin-top: var(--space);
          }
        `;
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

const Stack = ({ children, space, splitAfter, recursive }: IStack) => {
  return (
    <StyledStack space={space} splitAfter={splitAfter} recursive={recursive}>
      {children}
    </StyledStack>
  );
};

export default Stack;
