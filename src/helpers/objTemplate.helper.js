const { Patient } = require("../db");

const objTemplateHelper = {
  include: [{ model: Patient, attributes: ["name"] }],
  attributes: [
    "id",
    "name",
    "life_span",
    "weight",
    "height",
    "image",
    "created",
  ],
};

module.exports = objTemplateHelper;