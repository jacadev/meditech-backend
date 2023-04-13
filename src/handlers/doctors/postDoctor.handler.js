const { postDoctorController } = require("../../controllers");

const postDoctorHandler = async (req, res) => {
  const {
    name,
    life_span,
    patient,
    weight,
    height,
    image,
  } = req.body;
  try {
    const doctorPosted = await postDoctorController(
      name,
      life_span,
      patient,
      weight,
      height,
      image
    );
    res.status(201).json(doctorPosted);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = postDoctorHandler;
