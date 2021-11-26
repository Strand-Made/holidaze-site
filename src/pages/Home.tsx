import { useState, useEffect } from "react";
import axios from "axios";
import Hero from "../components/layout/Hero/Hero";
import SearchBar from "../components/forms/SearchBar/SearchBar";
import Section from "../components/layout/Section/Section";
import Container from "../components/layout/Container/Container";
import SuggestionsCard from "../components/SuggestionsCard/SuggestionsCard";
import Banner from "../components/Banner/Banner";
import Heading from "../components/Typography/Heading";
import Spacer from "../components/layout/utilities/Spacer/Spacer";
import Grid from "../components/layout/utilities/Grid/Grid";
import Main from "../components/layout/Main/Main";
import SkeletonLoader from "../components/layout/SkeleteonLoader/SkeletonLoader";
import Switcher from "../components/layout/utilities/Switcher/Switcher";

type CategorySuggestion = {
  category_image: CategoryImage;
  category_suggestion_title: string;
  name: string;
  id: number;
  Slug: string;
};
type CategoryImage = {
  alternativeText: string;
  url: string;
};

const Home = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [category, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      setError(false);
      try {
        const res = await axios.get(`${baseUrl}/categories`);
        setCategories(res.data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getCategories();
  }, [baseUrl]);

  return (
    <Main>
      <Hero>
        <SearchBar />
      </Hero>
      <Spacer mb="4" />
      <Container>
        <Section>
          <Heading.H2 weight="700" size="xl">
            Looking for something special?
          </Heading.H2>
          <Grid>
            {isLoading && <SkeletonLoader numberofLoaders={3} />}
            {error && <div>{error}</div>}
            {category.map((suggestion: CategorySuggestion) => {
              const { category_suggestion_title, id, Slug } = suggestion;

              const { url, alternativeText } = suggestion.category_image;
              const imageUrl = `${url}`;
              return (
                <SuggestionsCard
                  slug={Slug}
                  key={id}
                  title={category_suggestion_title}
                  img={imageUrl}
                  imgDesc={alternativeText}
                />
              );
            })}
          </Grid>
        </Section>
        <Spacer mb="6" />
        <Section>
          <Switcher threshold={3} limit={600} space={2}>
            <Banner
              heading=" Explore stays Bergen"
              to={"/establishments"}
              linkText="Explore"
              image={
                "https://images.unsplash.com/photo-1570571054854-8f5a9f80504a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              }
            />
            <Banner
              heading="Join us"
              to={"/contact"}
              linkText="Contact us"
              image={
                "https://images.unsplash.com/photo-1507038772120-7fff76f79d79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              }
            />
          </Switcher>
        </Section>
      </Container>
    </Main>
  );
};

export default Home;
