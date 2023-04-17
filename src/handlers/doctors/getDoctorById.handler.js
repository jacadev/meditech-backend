const { getDoctorByIdController } = require('../../controllers');

const getDoctorByIdHandler = async (req, res) => {
  const { doctor_id } = req.params;
  try {
    const doctorById = await getDoctorByIdController(doctor_id);
    res.status(200).json(doctorById);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getDoctorByIdHandler;