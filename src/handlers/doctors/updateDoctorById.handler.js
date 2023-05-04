const { updateDoctorByIdController } = require('../../controllers');

const updateDoctorByIdHandler = async (req, res) => {
  const { doctor_id } = req.params;
  const { email, first_name, last_name, age, phone, status, about_me, profile_image, consultation_cost, location, diseases_treated, disponibilties_id, specialties} = req.body;
  try {
    const doctorById = await updateDoctorByIdController(doctor_id, email, age, first_name, last_name, phone, status, about_me, profile_image, consultation_cost, location, diseases_treated, disponibilties_id, specialties);
    return res.status(200).json(doctorById);
    // return res.status(201).send('Doctor actualizado con éxito');
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = updateDoctorByIdHandler;