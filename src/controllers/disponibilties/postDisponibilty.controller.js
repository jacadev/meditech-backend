const { Disponibilty, Timetable } = require("../../db.js");

const postDisponibiltyController = async (date, day_id, timetable_ids, doctor_id) => {

    if (!date || !day_id || !timetable_ids || !doctor_id) throw new Error("Faltan datos obligatorios");

    const existingDisponibilty = await Disponibilty.findOne({
        where: { day_id },
        include: [{ model: Timetable, where: { id: timetable_ids } }]
    });

    if (existingDisponibilty) {
        throw new Error("Al menos uno de estos horarios ya está disponible para este día");
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