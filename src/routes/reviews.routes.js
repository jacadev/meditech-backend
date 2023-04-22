const { Router } = require("express");
const reviewsRouter = Router();
const {
    getAllReviewsHandler,
    getReviewByIdHandler,
    postReviewHandler,
    updateReviewByIdHandler
} = require("../handlers");

reviewsRouter.get("/", getAllReviewsHandler);
reviewsRouter.get("/:review_id", getReviewByIdHandler);
reviewsRouter.post("/", postReviewHandler);
reviewsRouter.put("/:review_id", updateReviewByIdHandler);

module.exports = reviewsRouter;