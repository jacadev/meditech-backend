const { Specialty } = require("../../db.js")

const getAllSpecialtiesController = async () => {
    return await Specialty.findAll();
};

module.exports = getAllSpecialtiesController;