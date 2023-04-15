const { Cita } = require("../../db.js")

const getAllCitasController = async () => {
    return await Cita.findAll();
};

module.exports = getAllCitasController;