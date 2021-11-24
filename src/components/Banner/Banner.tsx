import styled from "styled-components";
import {
  AiFillSafetyCertificate,
  AiFillWechat,
  AiFillCheckCircle,
} from "react-icons/ai";
import { FaWifi } from "react-icons/fa";
import Heading from "../Typography/Heading";
import { mediaQueries } from "../../utils/styleHelpers";
import Spacer from "../layout/utilities/Spacer/Spacer";
import { IconContainer } from "../IconsContainer/IconsContainer";
import BannerSection from "./BannerSection";
import BannerList, { BannerListItem } from "./BannerList";
import BannerImageContainer from "./BannerImgContainer";
import BannerImg from "./BannerImg";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  ${mediaQueries("sm")`
  flex-direction: row;
`}
`;

const Banner = () => {
  return (
    <BannerSection>
      <Heading.H3 weight="700" size="2xl">
        Our Promise
      </Heading.H3>
      <Heading.H4 weight="400" size="l">
        What differs us from the others?
      </Heading.H4>
      <Spacer mt="1" />
      <Flex>
        <BannerList>
          <BannerListItem>
            <IconContainer>
              <AiFillCheckCircle size="32" />
            </IconContainer>
            <Heading.H5 size="md">Satisfaction guarantee</Heading.H5>
          </BannerListItem>
          <BannerListItem>
            <IconContainer>
              <FaWifi size="32" />{" "}
            </IconContainer>
            Free wifi at all locations
          </BannerListItem>
          <BannerListItem>
            <IconContainer>
              <AiFillSafetyCertificate size="32" />
            </IconContainer>
            All hosts are vetted
          </BannerListItem>
          <BannerListItem>
            <IconContainer>
              <AiFillWechat size="32" />
            </IconContainer>
            24/7 support
          </BannerListItem>
        </BannerList>
        <BannerImageContainer>
          <BannerImg
            src={
              "https://images.unsplash.com/photo-1570571054854-8f5a9f80504a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            }
            alt="Woman relaxing in a comfy chair"
          />
        </BannerImageContainer>
      </Flex>
    </BannerSection>
  );
};

export default Banner;
