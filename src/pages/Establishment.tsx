import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Heading from "../components/Typography/Heading";
import Container from "../components/layout/Container/Container";
import FlexContainer from "../components/layout/utilities/Flex/FlexContainer";
import Spacer from "../components/layout/utilities/Spacer/Spacer";
import Amenitites from "../components/establishment/Amenities/Amenitites";
import Paragraph from "../components/Typography/Paragraph";
import useToggle from "../hooks/useToggle";
import RelativeWrapper from "../components/layout/navigation/MobileNav/RelativeWrapper";
import Image from "../components/layout/Image/Image";
import Popover from "../components/layout/Popover/Popover";
import Box from "../components/layout/Box/Box";
import { borderRadius } from "../globalStyle/_variables";
import OfferList from "../components/establishment/OfferList/OfferList";
import Section from "../components/layout/Section/Section";
import Grid from "../components/layout/utilities/Grid/Grid";
import StayCalculator from "../components/establishment/StayCalculator/StayCalculator";
import Aside from "../components/layout/Aside/Aside";
import Main from "../components/layout/Main/Main";
import EnquirePopup from "../components/establishment/EnquirePopup/EnquirePopup";

export type TUser = {
  id: number;
  username: string;
  email: string;
};

export type EstablishmentType = {
  id: number;
  title: string;
  price: number;
  bedrooms: number;
  distance_city_centre_km: number;
  user: TUser;
  image: {
    alternativeText: string;
    url: string;
    formats: {
      large: {
        url: string;
      };
    };
  };
  amenities: {
    breakfast: boolean;
    shower: boolean;
    gym: boolean;
    office: boolean;
    cleaning: boolean;
  };
  description: string;
};

const ImageContainer = styled.div`
  border-radius: ${borderRadius.md};
`;

const Establishment = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  let params = useParams();
  const { establishmentSlug } = params;

  const [isLoading, setIsLoading] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [establishment, setEstablishment] = useState<EstablishmentType | null>(
    null
  );
  const [toggle, setToggle] = useToggle(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    document.title = `${establishment?.title} | Holidaze`;
  }, [establishment]);

  useEffect(() => {
    const fetchEstablishment = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `${baseUrl}/establishments?slug=${establishmentSlug}`
        );
        const data = res.data[0];

        setEstablishment(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEstablishment();
  }, [baseUrl, establishmentSlug, setEstablishment]);

  const dateOnChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const host = establishment?.user;
  const establishmentTitle = establishment?.title;

  return (
    <Main>
      {isLoading && "Loading..."}
      {error && <div>Error</div>}
      {establishment && (
        <RelativeWrapper>
          <Container>
            <ImageContainer>
              <Image
                fullWidth
                src={establishment?.image.formats.large.url}
                alt={establishment.image.alternativeText}
              />
            </ImageContainer>
            <Spacer mt="1.5" />
            <Grid minWidth={400}>
              <Aside minWidth={60} asideWidth={400}>
                <Section>
                  <Heading size="2xl">{establishment.title}</Heading>
                  <OfferList establishment={establishment} />
                  <Spacer mt="2" />

                  <FlexContainer col gap="1.5rem">
                    <Box>
                      <Heading.H3 size="l">Description</Heading.H3>
                      <Paragraph>{establishment.description}</Paragraph>
                    </Box>
                    <Box>
                      <Heading.H4 size="l">Amenities</Heading.H4>
                      <Amenitites amenities={establishment.amenities} />
                    </Box>

                    <Box>
                      <Heading.H5 size="l">Reviews</Heading.H5>
                    </Box>
                  </FlexContainer>
                </Section>
                <Section>
                  <StayCalculator
                    setToggle={setToggle}
                    guests={guests}
                    setGuests={setGuests}
                    startDate={startDate}
                    handleDateSelect={dateOnChange}
                    endDate={endDate}
                    price={establishment.price}
                  />
                </Section>
              </Aside>
            </Grid>
            {toggle && (
              <Popover margin="0.5rem" position="fixed">
                <EnquirePopup
                  host={host}
                  establishmentTitle={establishmentTitle}
                  setToggle={setToggle}
                  establishment={establishment}
                  guests={guests}
                  startDate={startDate}
                  endDate={endDate}
                />
              </Popover>
            )}
          </Container>
        </RelativeWrapper>
      )}
    </Main>
  );
};

export default Establishment;
