import EmptyEnquiryList from "../../assets/empty.svg";
import Heading from "../Typography/Heading";
import Image from "../layout/Image/Image";
import styled from "styled-components";
import Box from "../layout/Box/Box";

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 100px;
`;

const EmptyEnquiries = () => {
  return (
    <EmptyContainer>
      <ImageContainer>
        <Image src={EmptyEnquiryList} alt="no result" width={100} />
      </ImageContainer>
      <Box>
        <Heading.H2 size="md">You have no enquiries at this time</Heading.H2>
      </Box>
    </EmptyContainer>
  );
};

export default EmptyEnquiries;
