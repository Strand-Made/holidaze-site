import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { borderRadius, shadows } from "../../../globalStyle/_variables";
import useDebounce from "../../../hooks/useDebounce";
import InputContainer from "../Input/InputContainer";
import FlexContainer from "../../layout/utilities/Flex/FlexContainer";
import SearchResultList from "./SearchResults";
import { baseUrl } from "../../../api/baseUrl";
import { FetchStatus } from "../../../utils/globalTypes";
import Spacer from "../../layout/utilities/Spacer/Spacer";
import Input from "../Input/Input";
import SearchContainer from "./SearchContainer/SearchContainer";
import { PrimaryButton } from "../../Button/Button";

const SearchHotel = styled.form`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  box-shadow: ${shadows.md};
  border-radius: ${borderRadius.md};
  z-index: 5;
`;

const ButtonContainer = styled.div`
  align-self: flex-end;
`;

const SearchBar = () => {
  const url = baseUrl;
  const [status, setStatus] = useState<FetchStatus>(FetchStatus.IDLE);
  const [error, setError] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [hotels, setHotels] = useState([]);

  let navigate = useNavigate();

  const debouncedSearchValue = useDebounce(searchValue, 350);

  useEffect(() => {
    async function searchHotels(search: string) {
      let searchParam = encodeURIComponent(search.replace(/&amp;/g, "&"));

      try {
        const res = await axios.get(
          `${url}/establishments?title_contains=${searchParam}`
        );
        const { data } = res;
        return data;
      } catch (error: any) {
        setStatus(FetchStatus.ERROR);
        setError(error.toString());
        return null;
      }
    }
    if (debouncedSearchValue) {
      searchHotels(debouncedSearchValue).then((data) => {
        if (data.length === 0) {
          setStatus(FetchStatus.NO_RESULT);
          return setHotels([]);
        }
        setStatus(FetchStatus.SUCCESS);
        return setHotels(data);
      });
    }
  }, [debouncedSearchValue, url]);

  return (
    <SearchHotel
      onSubmit={(e) => {
        e.preventDefault();
        if (searchValue === "") {
          return null;
        }
        if (searchValue.length > 1) {
          let navigateUrl = `/results/${searchValue}`;
          navigate(navigateUrl);
        }
      }}
    >
      <SearchContainer>
        <InputContainer>
          <FlexContainer justifyContent="space-between" gap="1rem">
            <FlexContainer flexGrow="1">
              <MdSearch size="36" color="var(--cool-gray-4)" />
              <Input
                onChange={(e) => {
                  setHotels([]);
                  setSearchValue(e.target.value);
                  setStatus(FetchStatus.FETCHING);
                }}
                value={searchValue}
                placeholder="Where are you staying?"
              />
            </FlexContainer>

            <ButtonContainer>
              <PrimaryButton size="md">Search</PrimaryButton>
            </ButtonContainer>
          </FlexContainer>
        </InputContainer>
        {error && <div>An error occured!</div>}
        {searchValue ? (
          <>
            <Spacer mt={"0.5"} />
            <SearchResultList
              searchValue={searchValue}
              status={status}
              setStatus={setStatus}
              establishments={hotels}
            />
          </>
        ) : null}
      </SearchContainer>
    </SearchHotel>
  );
};

export default SearchBar;
