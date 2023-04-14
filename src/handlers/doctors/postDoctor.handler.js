const { postDoctorController } = require("../../controllers");

const postDoctorHandler = async (req, res) => {
  const {
    user_name, 
    email, 
    password, 
    first_name, 
    last_name, 
    about_me, 
    profile_image, 
    tuition_code, 
    consultation_cost, 
    location, 
    phone, 
    diseases_treated,
    specialties
  } = req.body;
  
  try {
    const doctorPosted = await postDoctorController(
      user_name, 
      email, 
      password, 
      first_name, 
      last_name, 
      about_me, 
      profile_image, 
      tuition_code, 
      consultation_cost, 
      location, 
      phone, 
      diseases_treated,
      specialties
    );
    res.status(201).json(doctorPosted);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = postDoctorHandler;

