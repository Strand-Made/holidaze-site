import { ReactNode } from "react";

import Stack from "../../layout/Stack/Stack";

interface IInputContainer {
  children: ReactNode;
}

const InputContainer = ({ children }: IInputContainer) => {
  return <Stack space={"0.25rem"}>{children}</Stack>;
};

export default InputContainer;
