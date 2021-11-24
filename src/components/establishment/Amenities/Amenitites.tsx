import styled from "styled-components";
import {
  MdEmojiFoodBeverage,
  MdShower,
  MdOutlineCleaningServices,
  MdSportsTennis,
} from "react-icons/md";
import { borderRadius } from "../../../globalStyle/_variables";
import { IconContainer } from "../../IconsContainer/IconsContainer";
import FlexContainer from "../../layout/utilities/Flex/FlexContainer";
import Heading from "../../Typography/Heading";
import Box from "../../layout/Box/Box";

const BannerBox = styled.div`
  background: var(--teal-2);
  border-radius: ${borderRadius.md};
  padding: 1.5rem;
`;

type TAmenities = {
  amenities: {
    shower: boolean;
    office: boolean;
    gym: boolean;
    cleaning: boolean;
    breakfast: boolean;
  };
};

const Amenitites = ({ amenities }: TAmenities) => {
  const { breakfast, cleaning, gym, office, shower } = amenities;
  let amenitiesArray = [
    {
      breakfast,
      text: breakfast ? "Breakfast included" : null,
    },
    {
      cleaning,
      text: cleaning ? "Cleaning service" : null,
    },
    {
      gym,
      text: gym ? "Gym Included" : null,
    },
    {
      office,
      text: office ? "Office" : null,
    },
    {
      shower,
      text: shower ? "Bathroom" : null,
    },
  ];

  const iconCheck = (amenity) => {
    if (amenity.breakfast)
      return <MdEmojiFoodBeverage color="var(--teal-6)" size={24} />;

    if (amenity.shower) return <MdShower color="var(--teal-6)" size={24} />;

    if (amenity.gym) return <MdSportsTennis color="var(--teal-6)" size={24} />;
    if (amenity.cleaning)
      return <MdOutlineCleaningServices color="var(--teal-6)" size={24} />;
    if (amenity.office)
      return <MdOutlineCleaningServices color="var(--teal-6)" size={24} />;
  };

  let removeNullArr = amenitiesArray.filter((ameni) => {
    return ameni.text !== null;
  });

  return (
    <FlexContainer gap="1.5rem" wrap="wrap">
      {removeNullArr.map((service, index) => {
        return (
          <BannerBox key={index}>
            <FlexContainer gap="0.5rem" alignItems="center">
              <Box>
                <IconContainer background="var--cool-gray-1">
                  {iconCheck(service)}
                </IconContainer>
              </Box>
              <Box>
                <Heading.H5 size="md">{service.text}</Heading.H5>
              </Box>
            </FlexContainer>
          </BannerBox>
        );
      })}
    </FlexContainer>
  );
};

export default Amenitites;
