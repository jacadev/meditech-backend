const paginationHelper = (limit, page, dbMerged) => {
  if (!limit && !page) return dbMerged;
  if (!limit && Number(page) === 0) return dbMerged;
  if (!limit && Number(page) !== 0) return [];
  if (limit && !page) return dbMerged.slice(0, Number(limit));
  if (limit && page) {
    if (isNaN(limit) || isNaN(page))
      throw new Error("Values sent by queries must be numeric values");
    if (Number(page) > Math.round(dbMerged.length / Number(limit))) return [];
    const start = Number(limit) * Number(page);
    const end = start + Number(limit);
    return dbMerged.slice(start, end);
  }
};

module.exports = paginationHelper;