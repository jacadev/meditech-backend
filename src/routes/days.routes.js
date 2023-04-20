const { Router } = require("express");
const daysRouter = Router();
const {
    getAllDaysHandler,
    postDayHandler,
    updateDayByIdHandler
} = require("../handlers");

daysRouter.get("/", getAllDaysHandler);
daysRouter.post("/", postDayHandler);
daysRouter.put("/:day_id", updateDayByIdHandler);

module.exports = daysRouter;