import styled from "styled-components";
import NoResult from "../../../assets/no-result.svg";
import LinkButton from "../../Button/LinkButton";
import Image from "../../layout/Image/Image";
import Stack from "../../layout/Stack/Stack";
import FlexContainer from "../../layout/utilities/Flex/FlexContainer";
import Heading from "../../Typography/Heading";

const IllustrationContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 900px;
  margin: 0 auto;
`;

const EmptyIllustration = () => {
  return (
    <IllustrationContainer>
      <Stack>
        <Image src={NoResult} alt="no result" width={200} />

        <Stack space="0.5rem">
          <Heading.H2 size="l">
            No establishment matching your search
          </Heading.H2>
          <FlexContainer justifyContent="center">
            <LinkButton size="md" to="/">
              Go Back
            </LinkButton>
          </FlexContainer>
        </Stack>
      </Stack>
    </IllustrationContainer>
  );
};

export default EmptyIllustration;
