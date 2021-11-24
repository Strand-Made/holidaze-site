import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { borderRadius, shadows } from "../../../globalStyle/_variables";
import useDebounce from "../../../hooks/useDebounce";
import InputContainer from "../Input/InputContainer";
import FlexContainer from "../../layout/utilities/Flex/FlexContainer";
import TextInput from "../Input/Input";
import Label from "../Label/Label";
import { PrimaryButton } from "../../Button/Button";
import SearchResultList from "./SearchResults";
import { baseUrl } from "../../../api/baseUrl";
import { FetchStatus } from "../../../utils/globalTypes";

const SearchHotel = styled.form`
  position: relative;
  padding: 1.2rem;
  background: var(--teal-1);
  border-radius: ${borderRadius.md};
  box-shadow: ${shadows.lg};
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
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

  const debouncedSearchValue = useDebounce(searchValue, 500);

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
  }, [baseUrl, debouncedSearchValue]);

  return (
    <SearchHotel
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Flex>
        <InputContainer>
          <FlexContainer col>
            <Label>
              <HiOutlineLocationMarker color="var(--cool-gray-6)" size={25} />
              <span>Hotel</span>
            </Label>
            <TextInput
              onChange={(e) => {
                setSearchValue(e.target.value);
                setStatus(FetchStatus.FETCHING);
              }}
              value={searchValue}
              placeholder="Where are you staying?"
            />
          </FlexContainer>
        </InputContainer>
        <ButtonContainer>
          <PrimaryButton size="md"> Search</PrimaryButton>
        </ButtonContainer>
      </Flex>
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
