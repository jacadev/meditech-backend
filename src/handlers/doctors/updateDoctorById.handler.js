const { updateDoctorByIdController } = require('../../controllers');

const updateDoctorByIdHandler = async (req, res) => {
  const { doctor_id } = req.params;
  const source = isNaN(doctor_id) ? 'db' : 'api';
  try {
    const doctorById = await updateDoctorByIdController(doctor_id, source);
    res.status(200).json(doctorById);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = updateDoctorByIdHandler;