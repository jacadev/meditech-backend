const { updateReviewByIdController } = require("../../controllers");

const updateReviewByIdHandler = async (req, res) => {
    const { review_id } = req.params;
    const { comment, rating, patient_id, status } = req.body;

    try {
        const result = await updateReviewByIdController(review_id, comment, rating, patient_id, status);
        return res.status(201).json(result);
        // return res.status(201).send('Review actualizado con éxito');
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

module.exports = updateReviewByIdHandler;