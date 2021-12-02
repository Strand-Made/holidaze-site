import { SecondaryButton } from "../../Button/Button";
import Box from "../../layout/Box/Box";
import Stack from "../../layout/Stack/Stack";
import Spacer from "../../layout/utilities/Spacer/Spacer";
import Modal from "../../Modal/Modal";
import Heading from "../../Typography/Heading";
import FlexContainer from "../../layout/utilities/Flex/FlexContainer";

interface IFilter {
  sortByPrice: any;
  sortPrice: boolean | null;
  sortAlphabet: boolean | null;
  sortByAlphabet: any;
}

const FilterEstablishments = ({
  sortByPrice,
  sortPrice,
  sortAlphabet,
  sortByAlphabet,
}: IFilter) => {
  const resetFilter = () => {
    sortByPrice(null);
    sortByAlphabet(null);
  };

  return (
    <>
      <Modal>
        <Stack space={"1rem"}>
          <Box>
            <Heading.H3>Filter</Heading.H3>
            <Spacer mt={"0.75"} />
            <FlexContainer gap="0.75rem">
              <SecondaryButton onClick={sortByPrice}>
                Price {sortPrice ? "(Descending)" : "(Ascending)"}
              </SecondaryButton>
              <SecondaryButton onClick={sortByAlphabet}>
                Alphabetically {sortAlphabet ? "(Descending)" : "(Ascending)"}
              </SecondaryButton>
            </FlexContainer>
          </Box>

          <Box>
            <SecondaryButton onClick={resetFilter}>
              Reset filter
            </SecondaryButton>
          </Box>
        </Stack>
      </Modal>
    </>
  );
};

export default FilterEstablishments;
