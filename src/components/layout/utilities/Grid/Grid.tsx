import { ReactNode } from "react";
import styled from "styled-components";

interface IGrid {
  children: ReactNode;
  gap?:
    | "0.25rem"
    | "0.5rem"
    | "0.75rem"
    | "1rem"
    | "1.5rem"
    | "2rem"
    | "3rem"
    | "4rem"
    | "6rem"
    | "8rem"
    | "12rem"
    | "16rem"
    | "24rem"
    | "32rem";
  minWidth?: number;
}

const GridStyle = styled.div<IGrid>`
  --gap: ${(props) => (props.gap ? props.gap : "1rem")};
  --minimum: ${(props) => (props.minWidth ? props.minWidth : 300)}px;
  display: grid;
  grid-gap: var(--gap);
  @supports (width: min(var(--minimum), 100%)) {
    & {
      grid-template-columns: repeat(
        auto-fit,
        minmax(min(var(--minimum), 100%), 1fr)
      );
    }
  }
`;

const Grid = ({ children, gap, minWidth }: IGrid) => {
  return (
    <GridStyle gap={gap} minWidth={minWidth}>
      {children}
    </GridStyle>
  );
};

export default Grid;
