const { postDoctorController } = require("../../controllers");

const postDoctorHandler = async (req, res) => {
  const {
    user_name, 
    email, 
    password, 
    first_name, 
    last_name, 
    phone, 
    age,
    gender,
    rol_id,
    about_me, 
    profile_image, 
    tuition_code, 
    consultation_cost, 
    location, 
    diseases_treated,
    specialties,
    preload
  } = req.body;
  
  try {
    const doctorPosted = await postDoctorController(
      user_name, 
      email, 
      password, 
      first_name, 
      last_name, 
      phone, 
      age,
      gender,
      rol_id,
      about_me, 
      profile_image, 
      tuition_code, 
      consultation_cost, 
      location, 
      diseases_treated,
      specialties,
      preload
    );
    return res.status(201).json(doctorPosted);
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
};

module.exports = postDoctorHandler;

