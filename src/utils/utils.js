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
  data.map(el => {
    return allFilters.push(
      el.Provider,
      el.SupportFor,
      el.Areas,
      el.CourseArea,
      el.Level,
      el.Cost,
      el.Type
    );
  });

  const unique = new Set(allFilters.flat());
  return [...unique].flat();
};

export default getAllFilters;

export { getFiltersGroup, getAllFilters };
