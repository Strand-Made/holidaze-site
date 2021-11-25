import React from "react";
import styled from "styled-components";
import { borderRadius, shadows } from "../../globalStyle/_variables";

type TModal = {
  children: React.ReactNode;
  absolute?: boolean;
};

const ModalStyled = styled.div<TModal>`
  background: white;
  padding: 2rem;
  width: 100%;
  top: 0;
  left: 0;
  border-radius: ${borderRadius.md};
  box-shadow: ${shadows.lg};
`;

const Modal = ({ children, absolute }: TModal) => {
  return <ModalStyled absolute={absolute}> {children} </ModalStyled>;
};

export default Modal;
