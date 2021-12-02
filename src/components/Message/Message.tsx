import styled from "styled-components";
import { ReactNode } from "react";
import { MdCheckCircle, MdError } from "react-icons/md";
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

const SuccessStyle = styled(ErrorStyle)`
  background: var(--yellow-1);
  color: var(--yellow-6);
`;

const Error = ({ children }: TMessage) => {
  return (
    <ErrorStyle>
      <MdError color="var(--red-3" size="25" />
      <p role="alert">{children}</p>
    </ErrorStyle>
  );
};

const Success = ({ children }: TMessage) => {
  return (
    <SuccessStyle>
      <MdCheckCircle color="inherit" size="25" />
      <p>{children}</p>
    </SuccessStyle>
  );
};
const Info = styled.div``;

Message.Error = Error;
Message.Success = Success;
Message.Info = Info;

export default Message;
