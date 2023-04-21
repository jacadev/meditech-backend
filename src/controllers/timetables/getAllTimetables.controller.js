const { Timetable } = require("../../db.js");

const getAllTimetablesController = async () => {
    return await Timetable.findAll();
};

module.exports = getAllTimetablesController;