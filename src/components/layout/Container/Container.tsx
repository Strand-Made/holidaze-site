import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../../../utils/styleHelpers";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = styled.div<ContainerProps>`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  ${mediaQueries("lg")`
  padding: 0;
  `}
`;

export default Container;
