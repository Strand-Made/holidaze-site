import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import { borderRadius } from "../../../globalStyle/_variables";
import useDebounce from "../../../hooks/useDebounce";
import InputContainer from "../Input/InputContainer";
import FlexContainer from "../../layout/utilities/Flex/FlexContainer";
import { PrimaryButton } from "../../Button/Button";
import SearchResultList from "./SearchResults";
import { baseUrl } from "../../../api/baseUrl";
import { FetchStatus } from "../../../utils/globalTypes";
import Input from "../Input/Input";

const SearchHotel = styled.form`
  position: relative;
  padding: 1.2rem;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const SearchContainer = styled.div`
  background: var(--cool-gray-1);
  padding: 1rem;
  border-radius: ${borderRadius.md};
`;

const SearchInput = styled(Input)`
  border: none;
  background: inherit;
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

  const debouncedSearchValue = useDebounce(searchValue, 350);

  useEffect(() => {
    async function searchHotels(search: string) {
      try {
        const res = await axios.get(
          `${url}/establishments?title_contains=${search}`
        );
        const { data } = res;
        return data;
      } catch (error) {
        setStatus(FetchStatus.ERROR);
        setError(error.toString());
        return [];
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
      }}
    >
      <SearchContainer>
        <InputContainer>
          <FlexContainer>
            <MdSearch size="36" color="var(--cool-gray-4)" />
            <SearchInput
              onChange={(e) => {
                setHotels([]);
                setSearchValue(e.target.value);
                setStatus(FetchStatus.FETCHING);
              }}
              value={searchValue}
              placeholder="Where are you staying?"
            />
            <ButtonContainer>
              <PrimaryButton size="md"> Search</PrimaryButton>
            </ButtonContainer>
          </FlexContainer>
        </InputContainer>
      </SearchContainer>

      {error && <div>An error occured!</div>}
      {searchValue ? (
        <SearchResultList
          status={status}
          setStatus={setStatus}
          establishments={hotels}
        />
      ) : null}
    </SearchHotel>
  );
};

export default SearchBar;
