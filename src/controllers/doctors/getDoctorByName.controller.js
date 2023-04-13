require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Op } = require("sequelize");
//const { Doctor } = require("../db");
//const { arrayCleaner, objTemplate } = require("../helpers");

const getDoctorByNameController = async (doctorName) => {
  // if (doctorName) {
  //   const localDbRaw = await Doctor.findAll({
  //     ...objTemplate,
  //     where: {
  //       name: {
  //         [Op.iLike]: `%${doctorName}%`,
  //       },
  //     },
  //   });
  //   const localDb = arrayCleaner(localDbRaw);
  //   const { data } = await axios.get(
  //     `https://api.thedoctorapi.com/v1/breeds?api_key=${API_KEY}`
  //   );
  //   const apiDoctors = arrayCleaner(data);
  //   const dbMerged = [...apiDoctors, ...localDb];
  //   const filtered = dbMerged.filter((found) =>
  //     found.name.toLowerCase().includes(doctorName.toLowerCase())
  //   );
  //   if (filtered.length !== 0) return filtered;
  //   return filtered;
  // }
  // throw new Error(
  //   "You must provide at least a name by query to perform a search"
  // );
};

module.exports = getDoctorByNameController;