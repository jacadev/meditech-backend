const orderByNameHelper = (filter, dbMerged) => {
  if (filter.toLowerCase() === "asc") {
    const orderByNameAsc = (a, b) => {
      if (a.name < b.name) return -1;
      else if (a.name > b.name) return 1;
      else return 0;
    };
    return dbMerged.sort(orderByNameAsc);
  }
  if (filter.toLowerCase() === "desc") {
    const orderByNameAsc = (a, b) => {
      if (a.name > b.name) return -1;
      else if (a.name < b.name) return 1;
      else return 0;
    };
    return dbMerged.sort(orderByNameAsc);
  }
};

module.exports = orderByNameHelper;