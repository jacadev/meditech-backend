const { updateDoctorByIdController } = require('../../controllers');

const updateDoctorByIdHandler = async (req, res) => {
  const { doctor_id } = req.params;
  const {phone, about_me, consultation_cost, location, diseases_treated} = req.body;
  try {
    const doctorById = await updateDoctorByIdController(doctor_id, phone, about_me, consultation_cost, location, diseases_treated);
    res.status(200).json(doctorById);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = updateDoctorByIdHandler;