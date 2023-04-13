//const { Doctor, Patient } = require("../../db");

const postDoctorController = async (name, life_span, patient, weight, height, image) => {
  // const newDoctor = await Doctor.create({
  //   name,
  //   life_span,
  //   weight,
  //   height,
  //   image,
  // });

  // for (const tempName of patient) {
  //   const temp = await Patient.findOne({ where: { name: tempName } });
  //   if (temp) {
  //     await newDoctor.addPatient(temp);
  //   }
  // }

  // return newDoctor;
};

module.exports = postDoctorController;
