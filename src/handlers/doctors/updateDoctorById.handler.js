const { updateDoctorByIdController } = require('../../controllers');

const updateDoctorByIdHandler = async (req, res) => {
  const { doctor_id } = req.params;
  const { email, password, first_name, last_name, phone, gender, status, about_me, profile_image, tuition_code, consultation_cost, location, diseases_treated, day_id, specialties} = req.body;
  try {
    const doctorById = await updateDoctorByIdController(doctor_id, email, password, first_name, last_name, phone, gender, status, about_me, profile_image, tuition_code, consultation_cost, location, diseases_treated, day_id, specialties);
    res.status(200).json(doctorById);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = updateDoctorByIdHandler;