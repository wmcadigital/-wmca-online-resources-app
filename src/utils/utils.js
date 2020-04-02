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

export default getAllFilters;

export { getFiltersGroup, getAllFilters, setAllFiltersForElement };
