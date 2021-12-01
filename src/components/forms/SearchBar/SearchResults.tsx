import styled from "styled-components";
import { MdApartment, MdHouseboat, MdHouse } from "react-icons/md";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { borderRadius } from "../../../globalStyle/_variables";
import { FetchStatus } from "../../../utils/globalTypes";
import Box from "../../layout/Box/Box";

const List = styled.ul`
  border-top: 1px solid var(--cool-gray-2);
  width: 100%;
  background: var(--cool-gray-1);
  padding-left: 0;
`;

const ResultItem = styled.li`
  padding: 0.25rem;
  font-weight: 600;
  border-radius: ${borderRadius.md};
 
  }
  a {
    padding: 0.25rem;
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    &:hover,
    &:focus,
    &:active {
      outline: none;
      background: var(--teal-2);
  }
`;

interface ListProps {
  status: FetchStatus;
  setStatus: any;
  establishments: {
    id: number;
    title: string;
    slug: string;
    category: {
      name: string;
    };
  }[];
}

const SearchResultList = ({ establishments, status }: ListProps) => {
  const [lengthCheck, setLengthCheck] = useState(false);
  const iconCheck = (category) => {
    if (category === "Hotels") {
      return (
        <MdApartment
          aria-label="Hotel Category"
          size="24"
          color="var(--blue-3)"
        />
      );
    }
    if (category === "b&b") {
      return (
        <MdHouseboat
          aria-label="B&B category"
          size="24"
          color="var(--blue-3)"
        />
      );
    }
    if (category === "House") {
      return (
        <MdHouse aria-label="House category" size="24" color="var(--blue-3)" />
      );
    }
  };
  useEffect(() => {
    if (establishments.length > 6) {
      setLengthCheck(true);
      establishments.length = 5;
    }
  }, [establishments]);
  return (
    <List>
      {status === FetchStatus.FETCHING && "Searching..."}
      {status === FetchStatus.ERROR && "Error getting establishments"}
      {status === FetchStatus.NO_RESULT && "No Result"}
      {establishments.map((establishment) => (
        <ResultItem aria-roledescription="list-item" key={establishment.id}>
          <Link to={`/establishments/${establishment.slug}`}>
            {iconCheck(establishment.category.name)}
            <Box padding={"0"}>
              <span>{establishment.title}</span>
            </Box>
          </Link>
        </ResultItem>
      ))}
      {lengthCheck && (
        <li>
          <Link to="/">View all results</Link>
        </li>
      )}
    </List>
  );
};

export default SearchResultList;
