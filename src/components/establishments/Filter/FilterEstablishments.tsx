import Checkbox from "../../forms/Input/Checkbox/Checkbox";
import { SecondaryButton } from "../../Button/Button";
import Box from "../../layout/Box/Box";
import Stack from "../../layout/Stack/Stack";
import Spacer from "../../layout/utilities/Spacer/Spacer";
import Modal from "../../Modal/Modal";
import Emphasize from "../../Typography/Emphasize";
import Heading from "../../Typography/Heading";
import FlexContainer from "../../layout/utilities/Flex/FlexContainer";

interface IFilter {
  sortByPrice: any;
  sortPrice: boolean;
  sortAlphabet: boolean;
  sortByAlphabet: any;
  houses: string;
  setHouses: any;
  hotels: string;
  setHotels: any;
  bb: string;
  setBb: any;
  categories: string[];
  setCategories: any;
}

const FilterEstablishments = ({
  sortByPrice,
  sortPrice,
  sortAlphabet,
  sortByAlphabet,
  houses,
  setHouses,
  hotels,
  setHotels,
  bb,
  setBb,
  categories,
  setCategories,
}: IFilter) => {
  // const handleChange = (category, setter, valueToSet) => {
  //   if (category === "") {
  //     return setter(valueToSet);
  //   } else {
  //     setter("");
  //   }
  //   let categoryArray = categories;
  //   const found = categoryArray.includes(valueToSet);
  //   if (found) {
  //     let filtered = categoryArray.filter(
  //       (specificCategory) => specificCategory === valueToSet
  //     );
  //     return setCategories(filtered);
  //   } else {
  //     categoryArray.push(category);
  //   }
  //   setCategories(categoryArray);
  // };

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
            <Emphasize>Categories</Emphasize>
            <Spacer mt={"0.75"} />
            <Checkbox labelText="Houses" name="houses" value={houses} />
            <Checkbox labelText="Hotels" name="hotels" value={hotels} />
            <Checkbox labelText="B&b's" name="b&b" value={bb} />
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
