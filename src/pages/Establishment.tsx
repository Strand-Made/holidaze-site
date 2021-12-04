import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { EstablishmentType, FetchStatus } from "../utils/globalTypes";
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
import OfferList from "../components/establishment/OfferList/OfferList";
import Section from "../components/layout/Section/Section";
import Grid from "../components/layout/utilities/Grid/Grid";
import StayPlanner from "../components/establishment/StayPlanner/StayPlanner";
import Aside from "../components/layout/Aside/Aside";
import Main from "../components/layout/Main/Main";
import EnquirePopup from "../components/establishment/EnquirePopup/EnquirePopup";
import Message from "../components/Message/Message";
import EstablishmentLoader from "../components/layout/SkeleteonLoader/Establishment/EstablishmentLoader";
import Stack from "../components/layout/Stack/Stack";

const Establishment = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  let params = useParams();
  let navigate = useNavigate();
  const { establishmentSlug } = params;

  const [status, setStatus] = useState<FetchStatus>(FetchStatus.IDLE);
  const [error, setError] = useState("");

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(undefined);
  const [guests, setGuests] = useState(1);
  const [establishment, setEstablishment] = useState<EstablishmentType | null>(
    null
  );
  const [toggle, setToggle] = useToggle(false);

  useEffect(() => {
    const fetchEstablishment = async () => {
      setStatus(FetchStatus.FETCHING);
      try {
        const res = await axios.get(
          `${baseUrl}/establishments?slug=${establishmentSlug}`
        );

        const data = res.data[0];
        setStatus(FetchStatus.SUCCESS);
        if (!data) {
          navigate("/");
        }

        setEstablishment(data);
      } catch (error: any) {
        setStatus(FetchStatus.ERROR);
        setError(error.toString());
      }
    };
    fetchEstablishment();
  }, [baseUrl, establishmentSlug, navigate, setEstablishment]);

  const dateOnChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const host = establishment?.user;
  const establishmentTitle = establishment?.title;

  return (
    <>
      <Helmet>
        <title>{`${establishmentTitle} | Holidaze`}</title>
        <meta
          name="description"
          content={`${establishment?.short_description}`}
        />
      </Helmet>
      <Main>
        {status === FetchStatus.ERROR && <Message.Error>{error}</Message.Error>}
        <RelativeWrapper>
          <Container>
            {status === FetchStatus.FETCHING && <EstablishmentLoader />}
            {establishment && (
              <>
                <Box borderRadius>
                  <Image
                    height={500}
                    fullWidth
                    src={`${establishment?.image.formats.large.url}`}
                    alt={establishment.image.alternativeText}
                  />
                </Box>
                <Spacer mt="1.5" />
                <Grid minWidth={400}>
                  <Aside minWidth={60} asideWidth={350}>
                    <Section>
                      <Stack space="1rem">
                        <Heading size="2xl">{establishment.title}</Heading>
                        <OfferList establishment={establishment} />
                        <FlexContainer col gap="2rem">
                          <Stack space="1rem">
                            <Heading.H3 size="l">Description</Heading.H3>
                            <Paragraph>{establishment.description}</Paragraph>
                          </Stack>
                          <Stack space="1rem">
                            <Heading.H4 size="l">Amenities</Heading.H4>
                            <Amenitites amenities={establishment.amenities} />
                          </Stack>
                        </FlexContainer>
                      </Stack>
                    </Section>

                    <Section>
                      <Spacer mt="1.5" />
                      <StayPlanner
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
              </>
            )}
          </Container>
        </RelativeWrapper>
      </Main>
    </>
  );
};

export default Establishment;
