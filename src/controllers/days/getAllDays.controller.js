const { Day } = require("../../db.js");

const getAllDaysController = async () => {
    return await Day.findAll();
};

module.exports = getAllDaysController;