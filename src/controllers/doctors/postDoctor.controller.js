const { Doctor, Person } = require("../../db");

const postDoctorController = async (user_name, email, password, first_name, last_name, phone, age, gender, rol_id, about_me, profile_image, tuition_code, consultation_cost, location, diseases_treated, specialties, day_id, timetable_id) => {

  const newPerson = await Person.create({
    userName: user_name, 
    email, 
    password, 
    firstName: first_name, 
    lastName: last_name, 
    phone,
    age,
    gender,
    rol_id
  });
  
  const newDoctor = await Doctor.create({
    aboutMe: about_me, 
    profileImage: profile_image, 
    tuitionCode: tuition_code, 
    consultationCost: consultation_cost, 
    location, 
    diseasesTreated: diseases_treated
  });
  // console.log("propiedades", newDoctor.__proto__);
  await newDoctor.setPerson(newPerson); //  establece la relación entre un doctor y su información personal
  await newDoctor.addSpecialties(specialties);
  await newDoctor.addDays(day_id);
  await newDoctor.addTimetables(timetable_id);

  return newDoctor;

};

module.exports = postDoctorController;
