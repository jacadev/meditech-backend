const arrayCleanerHelper = (array) => {
  return array.map((elm) => {
    if (elm.created === undefined) {
      return {
        id: elm.id,
        name: elm.name,
        life_span: elm.life_span,
        patient: elm.patient,
        weight: elm.weight.metric,
        height: elm.height.metric,
        image: elm.image.url,
        created: false,
      };
    } else {
      return {
        id: elm.id,
        name: elm.name,
        life_span: elm.life_span,
        patient: elm.patients
          .map((temp) => temp.name)
          .toString()
          .replace(/,/g, ", "),
        weight: elm.weight,
        height: elm.height,
        image: elm.image,
        created: elm.created,
      };
    }
  });
};

module.exports = arrayCleanerHelper;