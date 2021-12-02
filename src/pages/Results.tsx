import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../api/baseUrl";
import { EstablishmentType, FetchStatus } from "../utils/globalTypes";
import EmptyIllustration from "../components/empty-states/EmptyIllustration/EmptyIllustration";
import Card from "../components/establishment/Card/Card";
import Container from "../components/layout/Container/Container";
import Main from "../components/layout/Main/Main";
import SkeletonLoader from "../components/layout/SkeleteonLoader/SkeletonLoader";
import FlexContainer from "../components/layout/utilities/Flex/FlexContainer";
import Grid from "../components/layout/utilities/Grid/Grid";
import Spacer from "../components/layout/utilities/Spacer/Spacer";
import Message from "../components/Message/Message";
import Heading from "../components/Typography/Heading";

const Results = () => {
  let { search } = useParams();
  const [status, setStatus] = useState<FetchStatus>(FetchStatus.IDLE);
  const [error, setError] = useState("");
  const [establishments, setEstablishments] = useState([]);
  useEffect(() => {
    const fetchEstablishments = async () => {
      let url = `${baseUrl}/establishments`;
      try {
        setStatus(FetchStatus.FETCHING);
        let res = await axios.get(url);
        let { data } = res;
        setStatus(FetchStatus.SUCCESS);
        setEstablishments(data);
      } catch (err) {
        setStatus(FetchStatus.ERROR);
        setError(err.toString());
      }
    };
    fetchEstablishments();
  }, [search]);

  function filterSearch(arr, query) {
    let searchKeyword = query.replace(" ", "-").toLowerCase();
    return arr.filter((result) => {
      let title = result.title.replace(" ", "-").toLowerCase();
      return title.indexOf(searchKeyword) !== -1;
    });
  }

  let filteredEstablishments = filterSearch(establishments, search);
  console.log(filteredEstablishments);

  return (
    <Main>
      <Container>
        <FlexContainer justifyContent="space-between" alignItems="center">
          <Heading size="xl">Search results for: {search} </Heading>
        </FlexContainer>
        <Spacer mt="2" />
        {status === FetchStatus.ERROR && <Message.Error>{error}</Message.Error>}
        {status === FetchStatus.FETCHING && (
          <SkeletonLoader numberofLoaders={6} />
        )}
        <Grid gap="1.5rem">
          {filteredEstablishments.length > 0 ? (
            filteredEstablishments.map((establishment: EstablishmentType) => {
              const { id, price, slug, title } = establishment;
              const imgUrl = establishment.image.formats.small.url;
              const altText = establishment.image.alternativeText;
              return (
                <Card
                  key={id}
                  price={price}
                  slug={`/establishments/${slug}`}
                  title={title}
                  img={imgUrl}
                  altText={altText}
                />
              );
            })
          ) : (
            <EmptyIllustration />
          )}
        </Grid>
      </Container>
    </Main>
  );
};

export default Results;
