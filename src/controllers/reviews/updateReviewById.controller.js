const { Review } = require("../../db.js");

const updateReviewByIdController = async (review_id, comment, rating, patient_id, status) => {
    const review = await Review.findByPk(review_id);

    if (!review) throw new Error("La review no existe");

    const updateData = {};
    if (comment) updateData.comment = comment;
    if (rating) updateData.rating = rating;
    if (patient_id) updateData.patient_id = patient_id;
    updateData.status = status;

    await review.update(updateData);

    return review;
};

module.exports = updateReviewByIdController;