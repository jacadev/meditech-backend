const { Doctor} = require("../../db");

const postDoctorController = async (user_name, email, password, first_name, last_name, about_me, profile_image, tuition_code, consultation_cost, location, phone, diseases_treated, specialties) => {
  const newDoctor = await Doctor.create({
    userName: user_name, 
    email: email, 
    password: password, 
    firstName: first_name, 
    lastName: last_name, 
    aboutMe: about_me, 
    profileImage: profile_image, 
    tuitionCode: tuition_code, 
    consultationCost: consultation_cost, 
    location: location, 
    phone: phone, 
    diseasesTreated: diseases_treated
  });
  
  console.log('doctor creado exitosamente', newDoctor);
  await newDoctor.addSpecialties(specialties)

  return newDoctor;

};

module.exports = postDoctorController;
