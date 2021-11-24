import styled from "styled-components";
import { MdApartment, MdHouseboat, MdHouse } from "react-icons/md";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { borderRadius, shadows } from "../../../globalStyle/_variables";
import { FetchStatus } from "../../../utils/globalTypes";

const List = styled.ul`
  position: absolute;
  left: 0;
  padding: 2rem;
  box-shadow: ${shadows.md};
  border-radius: ${borderRadius.md};
  top: 50%;
  margin-top: 0.5rem;
  width: 100%;
  background: var(--teal-1);
`;

const ResultItem = styled.li`
  padding: 0.5rem;
  font-weight: 600;
  border-radius: ${borderRadius.md};
  &:hover {
    background: var(--teal-2);
  }
  a {
    display: block;
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
      return <MdApartment size="24" color="inherit" />;
    }
    if (category === "Cabin") {
      return <MdHouseboat size="24" color="inherit" />;
    }
    if (category === "House") {
      return <MdHouse size="24" color="inherit" />;
    }
  };
  useEffect(() => {
    if (establishments.length > 10) {
      setLengthCheck(true);
      establishments.length = 8;
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
            <span>{establishment.title}</span>
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
