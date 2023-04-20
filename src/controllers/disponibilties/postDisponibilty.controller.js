const { Disponibilty, Day, Timetable, Doctor } = require("../../db.js");

const postDisponibiltyController = async (date, day_id, timetable_id, doctor_id) => {

    if (!date || !day_id || !timetable_id || !doctor_id) throw new Error("Faltan datos obligatorios");

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