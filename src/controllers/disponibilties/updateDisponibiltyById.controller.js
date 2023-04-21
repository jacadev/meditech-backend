const { Disponibilty } = require("../../db.js");
const { Op } = require("sequelize");

const updatedDisponibiltyByIdController = async (disponibilty_id, date, day_id, timetable_id, status) => {
    // Buscar la disponibilidad por ID
    const disponibilty = await Disponibilty.findByPk(disponibilty_id);

    if (!disponibilty) {
        throw new Error("Disponibilidad no encontrada");
    }

    // Validar que el día y horario no estén registrados con el mismo doctor
    const existingDisponibilty = await Disponibilty.findOne({
        where: {
            day_id,
            timetable_id,
            doctor_id: disponibilty.doctor_id,
            id: { [Op.ne]: disponibilty.id }
        }
    });

    if (existingDisponibilty) {
        throw new Error("Este horario ya está disponible para este doctor en este día");
    }

    // Actualizar los campos que vengan en el body
    const updateFields = {};

    if (date !== undefined) {
        updateFields.date = date;
    }

    if (day_id !== undefined) {
        updateFields.day_id = day_id;
    }

    if (timetable_id !== undefined) {
        updateFields.timetable_id = timetable_id;
    }

    if (status !== undefined) {
        updateFields.status = status;
    }

    await disponibilty.update(updateFields);

    return disponibilty;
}

module.exports = updatedDisponibiltyByIdController;
