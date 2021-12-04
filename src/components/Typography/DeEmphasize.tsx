import styled from "styled-components";

interface IDemphasize {
  fontSize?: "1rem" | "1.2rem" | "1.44rem" | "1.728rem";
}

const Demphasize = styled.span<IDemphasize>`
  font-weight: 400;
  color: var(--cool-gray-5);
  font-size: ${(props) => (props.fontSize ? props.fontSize : "inherit")};
`;

export default Demphasize;
