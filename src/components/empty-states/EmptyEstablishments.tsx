import styled from "styled-components";
import EmptyEstablishmentsImage from "../../assets/emptyEstablishments.svg";
import Box from "../layout/Box/Box";
import Heading from "../Typography/Heading";
import Image from "../layout/Image/Image";
import Stack from "../layout/Stack/Stack";
import Paragraph from "../Typography/Paragraph";

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 200px;
`;

const EmptyEstablishments = () => {
  return (
    <EmptyContainer>
      <ImageContainer>
        <Image src={EmptyEstablishmentsImage} alt="no result" />
      </ImageContainer>
      <Stack>
        <Paragraph weight="600">
          Get started by creating an establishment below
        </Paragraph>
      </Stack>
    </EmptyContainer>
  );
};

export default EmptyEstablishments;
