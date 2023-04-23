const { Day } = require("../../db.js");

const getAllDaysController = async () => {
    return await Day.findAll({
        where: {
            status: true
        },
    });
};

module.exports = getAllDaysController;