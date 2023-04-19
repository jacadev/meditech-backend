const { Router } = require("express");
const reviewsRouter = Router();
const {
    getAllReviewsHandler,
    postReviewHandler,
} = require("../handlers");

reviewsRouter.get("/", getAllReviewsHandler);
reviewsRouter.post("/", postReviewHandler);

module.exports = reviewsRouter;