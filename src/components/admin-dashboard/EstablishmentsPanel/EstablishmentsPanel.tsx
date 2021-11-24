import { ReactNode } from "react";
import styled from "styled-components";
import { borderRadius } from "../../../globalStyle/_variables";
import { mediaQueries } from "../../../utils/styleHelpers";
import LinkButton from "../../Button/LinkButton";
import Box from "../../layout/Box/Box";
import FlexContainer from "../../layout/utilities/Flex/FlexContainer";
import Spacer from "../../layout/utilities/Spacer/Spacer";
import Heading from "../../Typography/Heading";

type TEstablishmentPanel = {
  children: ReactNode;
};

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mediaQueries("md")`
width: 500px;
`}
`;
const EstablishmentsList = styled.div`
  background: var(--cool-gray-2);
  padding: 1rem;
  border-radius: ${borderRadius.sm};
`;

const EstablishmentsPanel = ({ children }: TEstablishmentPanel) => {
  return (
    <Panel>
      <Box>
        <Heading.H2>Establishments</Heading.H2>
        <EstablishmentsList aria-roledescription="list">
          {children}
        </EstablishmentsList>
        <Spacer mt="1" />
        <FlexContainer justifyContent="end">
          <LinkButton to="create-establishment" size="md">
            Create new
          </LinkButton>
        </FlexContainer>
      </Box>
    </Panel>
  );
};

export default EstablishmentsPanel;
