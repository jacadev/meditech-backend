const { getAllPatientsController } = require("../../controllers");

const getAllPatientsHandler = async (req, res) => {
  const { limit, page, filter, created, weight, temp } = req.query;
  try {
    const allPatients = await getAllPatientsController(
      limit,
      page,
      filter,
      created,
      weight,
      temp
    );
    res.status(200).json(allPatients);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getAllPatientsHandler;
