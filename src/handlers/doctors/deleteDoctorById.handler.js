const { deleteDoctorByIdController } = require('../../controllers');

const deleteDoctorByIdHandler = async (req, res) => {
  const { doctor_id } = req.params;
  const source = isNaN(doctor_id) ? 'db' : 'api';
  try {
    const doctorById = await deleteDoctorByIdController(doctor_id, source);
    res.status(200).json(doctorById);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// probando cambio

module.exports = deleteDoctorByIdHandler;