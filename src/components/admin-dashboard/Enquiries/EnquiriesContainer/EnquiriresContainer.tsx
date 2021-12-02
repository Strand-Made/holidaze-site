import styled from "styled-components";
import { borderRadius, shadows } from "../../../../globalStyle/_variables";

const EnquiriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: var(--cool-gray-2);
  border-radius: ${borderRadius.md};
  padding: 1rem;

  box-shadow: ${shadows.sm};
`;

export default EnquiriesContainer;
