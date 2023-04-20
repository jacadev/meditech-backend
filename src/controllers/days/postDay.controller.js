const { Day } = require("../../db.js");

const postDayController = async (day) => {
    if (!day) throw new Error("Faltan datos obligatorios.")

    // Buscar si ya existe un día con el mismo nombre
    const existingDay = await Day.findOne({ where: { day } });

    // Si ya existe, lanzamos un error
    if (existingDay) {
        throw new Error("Ya existe un día con el nombre ingresado.");
    }

    // Si no existe, crear nueva especialidad
    const newDay = await Day.create({ day });

    return newDay;
};

module.exports = postDayController;