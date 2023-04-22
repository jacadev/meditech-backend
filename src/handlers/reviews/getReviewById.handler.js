const { getReviewByIdController } = require("../../controllers");

const getReviewByIdHandler = async (req, res) => {
    const { review_id } = req.params;
    try {
        const reviewById = await getReviewByIdController(review_id);
        return res.status(200).json(reviewById);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = getReviewByIdHandler;