const { getPatientByNameController } = require('../../controllers');

const getPatientByNameHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const patientByName = await getPatientByNameController(name);
    res.status(200).json(patientByName);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getPatientByNameHandler;