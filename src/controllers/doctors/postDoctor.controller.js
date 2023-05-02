const { Doctor, Person } = require("../../db");
const cloudinary = require('../../middlewares/cloudinary');

const postDoctorController = async (user_name, email, password, first_name, last_name, phone, age, gender, rol_id, about_me, profile_image, tuition_code, consultation_cost, location, diseases_treated, specialties, preload) => {

   

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

  let cloudinaryUrl = '';

  if(preload === false){
    const result = await cloudinary.uploader.upload(profile_image, {
      folder: "meditech",
      // width: 300,
      // crop: "scale"
    });

    cloudinaryUrl = result.secure_url;    
  }
  
  const newDoctor = await Doctor.create({
    aboutMe: about_me, 
    profileImage: preload === false ? cloudinaryUrl : profile_image, 
    tuitionCode: tuition_code, 
    consultationCost: consultation_cost, 
    location, 
    diseasesTreated: diseases_treated
  });
  // console.log("propiedades", newDoctor.__proto__);
  await newDoctor.setPerson(newPerson); //  establece la relación entre un doctor y su información personal
  await newDoctor.addSpecialties(specialties);

  return newDoctor;

};

module.exports = postDoctorController;
