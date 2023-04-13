require("dotenv").config();
const { API_KEY } = process.env;
//const { Patient } = require("../db");
const axios = require("axios");
//const { arrayCleaner, objTemplate } = require("../helpers");

const updatePatientByIdController = async (patientId, source) => {
  // if (source === "api") {
  //   const { data } = await axios.put(
  //     `https://api.thepatientapi.com/v1/patients/${patientId}?api_key=${API_KEY}`
  //   );

  //   if (Object.keys(data).length > 0) {
  //     const patientApiImage = await axios.put(
  //       `https://api.thepatientapi.com/v1/images/${data.reference_image_id}?api_key=${API_KEY}`
  //     );
  //     const apiObjMerged = {
  //       ...data,
  //       image: {
  //         url: patientApiImage.data.url,
  //       },
  //     };

  //     return arrayCleaner([apiObjMerged])[0];
  //   }
  //   throw new Error(`Sorry, there is no patient with the id: ${patientId}`);
  // } else {
  //   const localDbRaw = await Patient.findByPk(patientId, objTemplate);
  //   const localDb = arrayCleaner([localDbRaw]);
  //   return localDb[0];
  // }
};

module.exports = updatePatientByIdController;