const { getAllPatientsController } = require("../../controllers");

const getAllPatientsHandler = async (req, res) => {
  // const {  } = req.query;
  try {
    const allPatients = await getAllPatientsController();
    res.status(200).json(allPatients);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getAllPatientsHandler;
