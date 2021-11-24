import { ReactNode } from "react";
import { MdError } from "react-icons/md";
import styled from "styled-components";
import { borderRadius } from "../../globalStyle/_variables";

type TMessage = {
  children: ReactNode;
};
const Message = () => {
  return <div></div>;
};

const ErrorStyle = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: baseline;
  background: var(--red-1);
  padding: 0.5rem;
  border-radius: ${borderRadius.md};
  color: var(--red-4);
  font-weight: bold;
`;

const Error = ({ children }: TMessage) => {
  return (
    <ErrorStyle>
      <MdError color="var(--red-3" size="25" />
      <p role="alert">{children}</p>
    </ErrorStyle>
  );
};
const Success = styled.div``;
const Info = styled.div``;

Message.Error = Error;
Message.Success = Success;
Message.Info = Info;

export default Message;
