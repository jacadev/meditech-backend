const { Timetable } = require("../../db.js");
const { Op } = require("sequelize")

const postTimetableController = async (startTime, endTime) => {
    if (!startTime || !endTime) throw new Error("Faltan datos obligatorios.")

    // Buscar si ya existe una misma hora de inicio o fin ya registrada
    const existingTimetable = await Timetable.findOne({
        where: {
            [Op.or]: [
                { startTime },
                { endTime }
            ]
        }
    });

    // Si ya existe, lanzamos un error
    if (existingTimetable) {
        throw new Error("Ya existe un horario con la hora ingresada.");
    }

    // Si no existe, crear nuevo horario
    const newTimetable = await Timetable.create({ startTime, endTime });

    return newTimetable;
};

module.exports = postTimetableController;