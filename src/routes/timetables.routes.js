const { Router } = require("express");
const timetablesRouter = Router();
const {
    getAllTimetablesHandler,
    postTimetableHandler,
    updateTimetableByIdHandler
} = require("../handlers");

timetablesRouter.get("/", getAllTimetablesHandler);
timetablesRouter.post("/", postTimetableHandler);
// timetablesRouter.put("/:timetable_id", updateTimetableByIdHandler);

module.exports = timetablesRouter;