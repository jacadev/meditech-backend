const {getAllReviewsController} = require("../../controllers");

const getAllReviewsHandler = async (req, res) => {
    try {
        const allReviews = await getAllReviewsController();
        return res.status(201).json(allReviews);
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
};

module.exports = getAllReviewsHandler;