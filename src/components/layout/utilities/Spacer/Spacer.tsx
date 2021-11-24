import styled from "styled-components";

type marginTypes =
  | "0.25"
  | "0.5"
  | "0.75"
  | "1"
  | "1.5"
  | "2"
  | "3"
  | "4"
  | "6"
  | "8"
  | "12"
  | "16"
  | "24"
  | "32";

interface SpacerProps {
  mb?: marginTypes;
  mt?: marginTypes;
  m?: marginTypes;
  mr?: marginTypes;
  ml?: marginTypes;
}

const Space = styled.div<SpacerProps>`
  margin-top: ${(props) => props.mt && `${props.mt}rem`};
  margin-bottom: ${(props) => props.mb && `${props.mb}rem`};
  margin-right: ${(props) => props.mr && `${props.mr}rem`};
  margin-left: ${(props) => props.ml && `${props.ml}rem`};
  margin: ${(props) => props.m && `${props.m}rem`};
`;
const Spacer = ({ mt, mb, mr, ml, m }: SpacerProps) => {
  return <Space mt={mt} mb={mb} mr={mr} ml={ml} m={m} aria-hidden="true" />;
};

export default Spacer;
