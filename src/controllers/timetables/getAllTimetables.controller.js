const { Timetable } = require("../../db.js");

const getAllTimetablesController = async () => {
    return await Timetable.findAll({
        where: {
            status: true
        },
    });
};

module.exports = getAllTimetablesController;