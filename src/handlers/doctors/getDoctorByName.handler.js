const { getDoctorByNameController } = require('../../controllers');

const getDoctorByNameHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const doctorByName = await getDoctorByNameController(name);
    return res.status(201).json(doctorByName);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = getDoctorByNameHandler;