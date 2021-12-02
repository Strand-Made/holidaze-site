import { MdOutlineKingBed, MdOutlineWifi, MdPinDrop } from "react-icons/md";
import styled from "styled-components";
import { EstablishmentType } from "../../../utils/globalTypes";
import { IconContainer } from "../../IconsContainer/IconsContainer";
import FlexContainer from "../../layout/utilities/Flex/FlexContainer";
import Emphasize from "../../Typography/Emphasize";

interface IStyledList {
  establishment: EstablishmentType;
}

const StyledOfferList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 0;
`;

const OfferList = ({ establishment }: IStyledList) => {
  return (
    <StyledOfferList>
      <li>
        <FlexContainer gap="0.5rem" alignItems="center">
          <IconContainer>
            <MdPinDrop
              color="var(--teal-6)"
              aria-label="Distance to city center"
              size={24}
            />
          </IconContainer>
          <Emphasize>
            {establishment.distance_city_centre_km} km to city center
          </Emphasize>
        </FlexContainer>
      </li>
      <li>
        <FlexContainer gap="0.5rem" alignItems="center">
          <IconContainer>
            <MdOutlineKingBed
              color="var(--teal-6)"
              aria-label="Bedrooms"
              size={24}
            />
          </IconContainer>
          <Emphasize>{establishment.bedrooms}</Emphasize>
        </FlexContainer>
      </li>
      <li>
        <FlexContainer gap="0.5rem" alignItems="center">
          <IconContainer>
            <MdOutlineWifi
              color="var(--teal-6)"
              aria-label="Wifi signal"
              size={24}
            />
          </IconContainer>
          <Emphasize>Free Wifi</Emphasize>
        </FlexContainer>
      </li>
    </StyledOfferList>
  );
};

export default OfferList;
