let filters = {
  searchFilter : "",
  sortBy : "byEdited"
};

function getFilters(){
  return filters;
}

function setFilters(updates){
  if(updates.hasOwnProperty("searchFilter") && typeof updates.searchFilter === "string"){
    filters.searchFilter = updates.searchFilter
  }

  if(updates.hasOwnProperty("sortBy") && typeof updates.sortBy === "string"){
    filters.sortBy = updates.sortBy
  }
}

export { getFilters, setFilters }