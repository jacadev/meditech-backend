const { getAllDoctorsController } = require("../../controllers");

const getAllDoctorsHandler = async (req, res) => {
  const { limit, page, filter, created, weight, temp } = req.query;
  try {
    const allDoctors = await getAllDoctorsController(
      limit,
      page,
      filter,
      created,
      weight,
      temp
    );
    res.status(200).json(allDoctors);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getAllDoctorsHandler;
