import {
  MdEmojiFoodBeverage,
  MdShower,
  MdOutlineCleaningServices,
  MdSportsTennis,
} from "react-icons/md";
import { IconContainer } from "../../IconsContainer/IconsContainer";
import FlexContainer from "../../layout/utilities/Flex/FlexContainer";
import Heading from "../../Typography/Heading";
import Box from "../../layout/Box/Box";

type amenity = {
  shower: boolean;
  office: boolean;
  gym: boolean;
  cleaning: boolean;
  breakfast: boolean;
};

type TAmenities = {
  amenities: amenity;
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

  const iconCheck = (amenity: amenity) => {
    if (amenity.breakfast)
      return <MdEmojiFoodBeverage color="var(--teal-6)" size={24} />;

    if (amenity.shower) return <MdShower color="var(--teal-6)" size={24} />;

    if (amenity.gym) return <MdSportsTennis color="var(--teal-6)" size={24} />;
    if (amenity.cleaning)
      return <MdOutlineCleaningServices color="var(--teal-6)" size={24} />;
    if (amenity.office)
      return <MdOutlineCleaningServices color="var(--teal-6)" size={24} />;
  };

  let removeNullFromArr = amenitiesArray.filter((ameni) => {
    return ameni.text !== null;
  });

  return (
    <FlexContainer gap="1.5rem" wrap="wrap">
      {removeNullFromArr.map((service: any, index: number) => {
        return (
          <Box
            padding="1.5rem"
            background="var(--teal-2)"
            borderRadius
            key={index}
          >
            <FlexContainer gap="0.5rem" alignItems="baseline">
              <Box padding={"0"}>
                <IconContainer background="var--cool-gray-1">
                  {iconCheck(service)}
                </IconContainer>
              </Box>
              <Box padding={"0"}>
                <Heading.H5 size="md">{service.text}</Heading.H5>
              </Box>
            </FlexContainer>
          </Box>
        );
      })}
    </FlexContainer>
  );
};

export default Amenitites;
