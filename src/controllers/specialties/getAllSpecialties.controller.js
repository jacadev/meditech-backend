const { Specialty } = require("../../db.js")

const getAllSpecialtiesController = async () => {
    return await Specialty.findAll({
        where: {
            status: true
        },
    });
};

module.exports = getAllSpecialtiesController;