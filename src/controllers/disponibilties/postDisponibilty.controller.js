const { Disponibilty, Timetable } = require("../../db.js");
const { Op } = require("sequelize")

const postDisponibiltyController = async (date, day_id, timetable_ids, doctor_id) => {

    if (!date || !day_id || !timetable_ids || !doctor_id) throw new Error("Faltan datos obligatorios");

    // Validar que no exista ya una disponibilidad para el mismo doctor, día y horario
    const existingDisponibilty = await Disponibilty.findOne({
        where: { 
            day_id, 
            doctor_id,
            timetable_id: timetable_ids
        }
    });

    if (existingDisponibilty) {
        throw new Error("Este horario ya está disponible para este día con este médico");
    }

    // crear una instancia de Disponibilty para cada horario
    const disponibilities = await Promise.all(timetable_ids.map(async (timetable_id) => {
        const disponibility = await Disponibilty.create({
            date,
            doctor_id,
            day_id,
            timetable_id
        });
        return disponibility;
    }));

    // establecer la relación con el día correspondiente
    await Promise.all(disponibilities.map(async (disponibility) => {
        await disponibility.setDay(day_id);
    }));

    return disponibilities;
};

module.exports = postDisponibiltyController;