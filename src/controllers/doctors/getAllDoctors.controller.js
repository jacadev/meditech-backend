require("dotenv").config();
const { API_KEY } = process.env;
//const { Doctor } = require("../../db");
const axios = require("axios");
// const {
//   arrayCleaner,
//   objTemplate,
//   pagination,
//   orderByName,
//   orderByWeight,
//   filterByTemp
// } = require("../../helpers");

const getAllDoctorsController = async (limit, page, filter, created, weight, temp ) => {
  // const localDbRaw = await Doctor.findAll(objTemplate);
  // const localDb = arrayCleaner(localDbRaw);
  // const { data } = await axios.get(
  //   `https://api.thedoctorapi.com/v1/doctors?api_key=${API_KEY}`
  // );
  // const apiDoctors = arrayCleaner(data);

  // if (created) {
  //   if (created.toLowerCase() === "db") return localDb;
  //   if (created.toLowerCase() === "api") return apiDoctors;
  // }

  // const dbMerged = [...apiDoctors, ...localDb];

  // if(temp) {
  //   const tempFiltered = filterByTemp(temp, dbMerged)
  //   return tempFiltered
  // }

  // if (filter) {
  //   const nameOrdered = orderByName(filter, dbMerged);
  //   return nameOrdered;
  // }

  // if (weight) {
  //   const weightOrdered = orderByWeight(weight, dbMerged);
  //   return weightOrdered;
  // }

  // const paginationResult = pagination(limit, page, dbMerged);

  // return paginationResult;
};

module.exports = getAllDoctorsController;
