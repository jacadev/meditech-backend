const { Disponibilty } = require("../../db.js");

const postDisponibiltyController = async (date, day_id, timetable_id, doctor_id) => {

    if (!date || !day_id || !timetable_id || !doctor_id) throw new Error("Faltan datos obligatorios");

    const existingDisponibilty = await Disponibilty.findOne({
        where: {
            day_id,
            timetable_id,
        },
    });

    if (existingDisponibilty) {
        throw new Error("Este horario ya está disponible para este día");
    }

    const disponibilty = await Disponibilty.create({
        date,
        day_id,
        timetable_id,
        doctor_id,
    });

    await disponibilty.setDay(day_id);
    await disponibilty.setTimetable(timetable_id);

    return disponibilty;
};

module.exports = postDisponibiltyController;