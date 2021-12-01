import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import Card from "../components/establishment/Card/Card";
import Container from "../components/layout/Container/Container";
import FlexContainer from "../components/layout/utilities/Flex/FlexContainer";
import Spacer from "../components/layout/utilities/Spacer/Spacer";
import useToggle from "../hooks/useToggle";
import Heading from "../components/Typography/Heading";
import Grid from "../components/layout/utilities/Grid/Grid";
import { baseUrl } from "../api/baseUrl";
import Main from "../components/layout/Main/Main";
import SkeletonLoader from "../components/layout/SkeleteonLoader/SkeletonLoader";
import FilterEstablishments from "../components/establishments/Filter/FilterEstablishments";
import { SecondaryButton } from "../components/Button/Button";
import { FetchStatus } from "../utils/globalTypes";
import Message from "../components/Message/Message";

type EstablishmentType = {
  id: number;
  image: {
    alternativeText?: string;
    url: string;
    formats: {
      small: {
        url: string;
      };
    };
  };
  price: number;
  slug: string;
  title: string;
  category: {
    name: string;
  };
};
const Establishments = () => {
  const [status, setStatus] = useState<FetchStatus>(FetchStatus.IDLE);
  const [error, setError] = useState("");
  const [sortPrice, setSortPrice] = useState(null);
  const [sortAlphabet, setSortAlphabet] = useState(null);
  const [categories, setCategories] = useState([]);
  const [houses, setHouses] = useState("");
  const [hotels, setHotels] = useState("");
  const [bb, setBb] = useState("");
  const [establishments, setEstablishments] = useState([]);
  const [showFilter, setShowFilter] = useToggle();

  let params = useLocation();
  let catergoryFilter = params.search;

  useEffect(() => {
    const url = catergoryFilter
      ? `${baseUrl}/categories${catergoryFilter}`
      : `${baseUrl}/establishments`;
    const fetchEstablishments = async () => {
      setStatus(FetchStatus.FETCHING);
      try {
        const res = await axios.get(url);
        if (catergoryFilter) {
          let filteredEstablishments = res.data[0].establishments;
          return setEstablishments(filteredEstablishments);
        }
        setEstablishments(res.data);
        setStatus(FetchStatus.SUCCESS);
      } catch (error) {
        setStatus(FetchStatus.ERROR);
        setError(error.ToString());
      }
    };
    fetchEstablishments();
  }, [catergoryFilter, setEstablishments]);

  function sortByPrice() {
    setSortPrice(!sortPrice);
    setSortAlphabet(null);
    if (sortPrice) {
      let sortedByCheap = establishments.sort((a, b) =>
        a.price > b.price ? 1 : -1
      );
      return setEstablishments(sortedByCheap);
    }
    let sortedByExpensive = establishments.sort((a, b) =>
      a.price < b.price ? 1 : -1
    );
    return setEstablishments(sortedByExpensive);
  }

  function sortByAlphabet() {
    setSortAlphabet(!sortAlphabet);
    if (sortAlphabet) {
      let sortedbyAlphAsc = establishments.sort((a, b) =>
        a.title < b.title ? 1 : -1
      );
      return setEstablishments(sortedbyAlphAsc);
    }
    let sortedAlphDesc = establishments.sort((a, b) =>
      a.title > b.title ? 1 : -1
    );
    return setEstablishments(sortedAlphDesc);
  }

  return (
    <>
      <Helmet>
        <title>Establishments | Holidaze</title>
        <meta
          name="description"
          content="Rent hotels, B&b's and guesthouses in Bergen."
        />
      </Helmet>
      <Main>
        <Container>
          <FlexContainer justifyContent="space-between" alignItems="center">
            <Heading size="xl">Establishments </Heading>
            <SecondaryButton onClick={setShowFilter}>Filter</SecondaryButton>
          </FlexContainer>
          {showFilter && (
            <FilterEstablishments
              sortAlphabet={sortAlphabet}
              sortByAlphabet={sortByAlphabet}
              sortPrice={sortPrice}
              sortByPrice={sortByPrice}
              houses={houses}
              setHouses={setHouses}
              setHotels={setHotels}
              hotels={hotels}
              bb={bb}
              setBb={setBb}
              categories={categories}
              setCategories={setCategories}
            />
          )}
          <Spacer mt="2" />
          {status === FetchStatus.FETCHING && (
            <SkeletonLoader numberofLoaders={6} />
          )}
          {status === FetchStatus.ERROR && (
            <Message.Error>{error}</Message.Error>
          )}
          <Grid gap="1.5rem">
            {establishments.map((establishment: EstablishmentType) => {
              const { id, price, slug, title } = establishment;
              const imgUrl = establishment.image.formats.small.url;
              const altText = establishment.image.alternativeText;
              return (
                <Card
                  key={id}
                  price={price}
                  slug={slug}
                  title={title}
                  img={imgUrl}
                  altText={altText}
                />
              );
            })}
          </Grid>
        </Container>
      </Main>
    </>
  );
};

export default Establishments;
