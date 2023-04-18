const { getAllDoctorsController } = require("../../controllers");

const getAllDoctorsHandler = async (req, res) => {
  // const { rating, specialty, price, disease, limit, page } = req.query;
  try {
    const allDoctors = await getAllDoctorsController();
    return res.status(200).json(allDoctors);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = getAllDoctorsHandler;
