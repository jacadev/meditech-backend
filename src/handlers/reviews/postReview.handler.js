const { postReviewController } = require("../../controllers");

const postReviewHandler = async (req, res) => {
    let { comment, rating, patient_id, doctor_id } = req.body;

    rating = Number(rating);

    try {
        const newReview = await postReviewController(comment, rating, patient_id, doctor_id);

        return res.status(201).json(newReview);
        // return res.status(201).send("Review creado con éxito.");
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = postReviewHandler;