import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
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
    document.title = "Establishments | Holidaze";
  });
  useEffect(() => {
    const url = catergoryFilter
      ? `${baseUrl}/categories${catergoryFilter}`
      : `${baseUrl}/establishments`;
    const fetchEstablishments = async () => {
      setError(false);
      setLoading(true);

      try {
        const res = await axios.get(url);
        setLoading(false);
        if (catergoryFilter) {
          let filteredEstablishments = res.data[0].establishments;
          return setEstablishments(filteredEstablishments);
        }

        setEstablishments(res.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
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
      console.log(sortPrice);
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
  // function filterByCategory(category) {
  //   if (category) {
  //     const sortArray = establishments.filter((establishment) => {
  //       if (establishment.category.name === category) {
  //         return establishment;
  //       }
  //       return establishments;
  //     });
  //     setEstablishments(sortArray);
  //   }
  // }
  console.log(categories);

  return (
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
        {loading && <SkeletonLoader numberofLoaders={6} />}
        {error && "An error occured"}
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
  );
};

export default Establishments;
