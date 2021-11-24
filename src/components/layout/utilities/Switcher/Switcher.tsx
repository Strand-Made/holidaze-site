import { ReactNode } from "react";
import styled from "styled-components";

type TSwitcher = {
  children: ReactNode;
  threshold?: number;
  limit?: number;
  space?: number;
};
const Switch = styled.div<TSwitcher>`
  --threshold: 950px;
  --customThreshold: ${(props) => props.threshold}px;
  --space: 2rem;
  --customSpace: ${(props) => props.space}rem;
  display: flex;
  flex-wrap: wrap;
  gap: var(--customSpace, var(--space));

  & > * {
    flex-grow: 1;
    flex-basis: calc((var(--customThreshold) - 100%) * 999);
  }

  & > :nth-last-child(n + ${(props) => props.limit}),
  & > :nth-last-child(n + ${(props) => props.limit}) ~ * {
    flex-basis: 100%;
  }
`;

const Switcher = ({ children, threshold, limit, space }: TSwitcher) => {
  return (
    <Switch threshold={threshold} limit={limit} space={space}>
      {children}
    </Switch>
  );
};

export default Switcher;
