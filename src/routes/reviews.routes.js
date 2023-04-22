const { Router } = require("express");
const reviewsRouter = Router();
const {
    getAllReviewsHandler,
    postReviewHandler,
    updateReviewByIdHandler
} = require("../handlers");

reviewsRouter.get("/", getAllReviewsHandler);
reviewsRouter.post("/", postReviewHandler);
reviewsRouter.put("/:review_id", updateReviewByIdHandler);

module.exports = reviewsRouter;