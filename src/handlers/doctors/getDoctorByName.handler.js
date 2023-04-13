const { getDoctorByNameController } = require('../../controllers');

const getDoctorByNameHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const doctorByName = await getDoctorByNameController(name);
    res.status(200).json(doctorByName);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getDoctorByNameHandler;