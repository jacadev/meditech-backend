const orderByConsultationCostHelper = (filter, dbMerged) => {
  let orderByConsultationCost =
    filter.toLowerCase() === 'asc'
      ? dbMerged.sort((a, b) => {
          if (a.consultationCost > b.consultationCost) {
            return 1;
          }
          if (a.consultationCost < b.consultationCost) {
            return -1;
          }
          return 0;
        })
      : dbMerged.sort((a, b) => {
          if (a.consultationCost > b.consultationCost) {
            return -1;
          }
          if (a.consultationCost < b.consultationCost) {
            return 1;
          }
          return 0;
        });

  return orderByConsultationCost;
};

module.exports = orderByConsultationCostHelper;
