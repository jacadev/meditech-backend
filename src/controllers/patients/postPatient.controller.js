//const { Patient } = require("../../db");

const postPatientController = async (name, life_span, patient, weight, height, image) => {
  // const newPatient = await Patient.create({
  //   name,
  //   life_span,
  //   weight,
  //   height,
  //   image,
  // });

  // for (const patientName of patient) {
  //   const patient = await Patient.findOne({ where: { name: patientName } });
  //   if (patient) {
  //     await newPatient.addPatient(patient);
  //   }
  // }

  // return newPatient;
};

module.exports = postPatientController;
