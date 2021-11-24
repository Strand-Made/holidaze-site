import styled from "styled-components";

const BannerList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding: 1rem 0;
  max-width: 500px;
`;

export const BannerListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  color: var(--teal-6);
`;

export default BannerList;
