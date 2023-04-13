const orderByRatingHelper = (weight, dbMerged) => {
  if (weight.toLowerCase() === "lighter") {
    let weightConverted = dbMerged.map((elm) => {
      let aux = elm.weight.split(" - ");
      let aux2 = aux.reduce((a, b) => Math.round((Number(a) + Number(b)) / 2));
      if (!isNaN(aux2)) elm["weightAvg"] = Number(aux2);
      else elm["weightAvg"] = null;
      return elm;
    });

    const orderByWeightAsc = (a, b) => {
      return a.weightAvg - b.weightAvg;
    };

    return weightConverted
      .sort(orderByWeightAsc)
      .filter((elm) => elm.weightAvg !== null);
  }

  if (weight.toLowerCase() === "heavier") {
    let weightConverted = dbMerged.map((elm) => {
      let aux = elm.weight.split(" - ");
      let aux2 = aux.reduce((a, b) => Math.round((Number(a) + Number(b)) / 2));
      if (!isNaN(aux2)) elm["weightAvg"] = Number(aux2);
      else elm["weightAvg"] = null;
      return elm;
    });

    const orderByWeightDesc = (a, b) => {
      return b.weightAvg - a.weightAvg;
    };
    return weightConverted
      .sort(orderByWeightDesc)
      .filter((elm) => elm.weightAvg !== null);
  }
};

module.exports = orderByRatingHelper;