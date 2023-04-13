require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
//const { Op } = require("sequelize");
// const { Patient } = require("../db");
// const { arrayCleaner, objTemplate } = require("../helpers");

const getPatientByNameController = async (patientName) => {
  // if (patientName) {
  //   const localDbRaw = await Patient.findAll({
  //     ...objTemplate,
  //     where: {
  //       name: {
  //         [Op.iLike]: `%${patientName}%`,
  //       },
  //     },
  //   });
  //   const localDb = arrayCleaner(localDbRaw);
  //   const { data } = await axios.get(
  //     `https://api.thepatientapi.com/v1/breeds?api_key=${API_KEY}`
  //   );
  //   const apiPatients = arrayCleaner(data);
  //   const dbMerged = [...apiPatients, ...localDb];
  //   const filtered = dbMerged.filter((found) =>
  //     found.name.toLowerCase().includes(patientName.toLowerCase())
  //   );
  //   if (filtered.length !== 0) return filtered;
  //   return filtered;
  // }
  // throw new Error(
  //   "You must provide at least a name by query to perform a search"
  // );
};

module.exports = getPatientByNameController;