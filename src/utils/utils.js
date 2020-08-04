const getFiltersGroup = (data, filter) => {
  const allFilters = [];
  data.map(el => {
    return allFilters.push(el[filter]);
  });

  const unique = new Set(allFilters.flat());
  return [...unique].flat();
};

const getAllFilters = async data => {
  const allFilters = [];
  // eslint-disable-next-line array-callback-return
  data.map(el => {
    allFilters.push(
      el.Provider,
      el.Opportunity,
      el.Category,
      el.Eligibility,
      el.SkillLevel,
      el.Age
    );
  });

  const unique = new Set(allFilters.flat());
  return [...unique].flat();
};
const setAllFiltersForElement = async data => {
  let allFilters = [];
  // eslint-disable-next-line array-callback-return
  data.map(el => {
    allFilters.push(
      el.Provider,
      el.Opportunity,
      el.Category,
      el.Eligibility,
      el.SkillLevel,
      el.Age
    );
    // eslint-disable-next-line no-param-reassign
    el.filters = allFilters.flat();
    allFilters = [];
  });

  return data;
};

const splitArray = async (arr, chunkSize = 20) => {
  let index = 0;
  const arrayLength = arr.length;
  const tempArray = [];
  let myChunk;

  for (index = 0; index < arrayLength; index += chunkSize) {
    myChunk = arr.slice(index, index + chunkSize);
    // Do something if you want with the group
    tempArray.push(myChunk);
  }

  return tempArray;
};

export { getFiltersGroup, getAllFilters, setAllFiltersForElement, splitArray };
