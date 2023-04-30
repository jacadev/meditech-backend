const { getAllReviewsOfPatientByIdController } = require('../../controllers');

const getAllReviewsOfPatientByIdHandler = async (req, res) => {
    const { patient_id } = req.params;
    try {
        const reviewsOfPatient = await getAllReviewsOfPatientByIdController(patient_id);
        return res.status(201).json(reviewsOfPatient);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = getAllReviewsOfPatientByIdHandler;