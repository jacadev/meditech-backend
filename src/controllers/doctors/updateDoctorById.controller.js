require("dotenv").config();
const { API_KEY } = process.env;
//const { Doctor } = require("../db");
const axios = require("axios");
//const { arrayCleaner, objTemplate } = require("../helpers");

const updateDoctorByIdController = async (doctorId, source) => {
  // if (source === "api") {
  //   const { data } = await axios.put(
  //     `https://api.thedoctorapi.com/v1/doctors/${doctorId}?api_key=${API_KEY}`
  //   );

  //   if (Object.keys(data).length > 0) {
  //     const doctorApiImage = await axios.put(
  //       `https://api.thedoctorapi.com/v1/images/${data.reference_image_id}?api_key=${API_KEY}`
  //     );
  //     const apiObjMerged = {
  //       ...data,
  //       image: {
  //         url: doctorApiImage.data.url,
  //       },
  //     };

  //     return arrayCleaner([apiObjMerged])[0];
  //   }
  //   throw new Error(`Sorry, there is no doctor with the id: ${doctorId}`);
  // } else {
  //   const localDbRaw = await Doctor.findByPk(doctorId, objTemplate);
  //   const localDb = arrayCleaner([localDbRaw]);
  //   return localDb[0];
  // }
};

module.exports = updateDoctorByIdController;