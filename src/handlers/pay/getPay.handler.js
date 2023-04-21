const { getAllPayController } = require("../../controllers");

const getAllPaysHandler = async (req, res) => {
  // const { rating, specialty, price, disease, limit, page } = req.query;
  try {
    const allPays = await getAllPayController();
    return res.status(200).json(allPays);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = getAllPaysHandler;
