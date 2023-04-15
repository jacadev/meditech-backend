const { Doctor, Person} = require("../../db");

const postDoctorController = async (user_name, email, password, first_name, last_name, phone, age, gender, rol, about_me, profile_image, tuition_code, consultation_cost, location, diseases_treated, specialties) => {

  const newPerson = await Person.create({
    userName: user_name, 
    email: email, 
    password: password, 
    firstName: first_name, 
    lastName: last_name, 
    phone: phone,
    age: age,
    gender: gender,
    rol_id: rol
  });
  
  const newDoctor = await Doctor.create({
    aboutMe: about_me, 
    profileImage: profile_image, 
    tuitionCode: tuition_code, 
    consultationCost: consultation_cost, 
    location: location, 
    diseasesTreated: diseases_treated
  });
  
  await newDoctor.setPerson(newPerson); //  establece la relación entre un doctor y su información personal
  await newDoctor.addSpecialties(specialties)

  return newDoctor;

};

module.exports = postDoctorController;
