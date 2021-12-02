import styled from "styled-components";
import { borderRadius } from "../../globalStyle/_variables";
import { buttonSizes } from "./Button";

const MailButton = styled.a`
  display: block;
  background: var(--blue-5);
  color: var(--blue-1);
  padding: ${buttonSizes.md};
  font-size: 1rem;
  text-align: center;
  border-radius: ${borderRadius.md};
`;

export default MailButton;
