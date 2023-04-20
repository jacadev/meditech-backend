const { Timetable } = require("../../db.js");
const { Op } = require("sequelize");

const updateTimetableByIdController = async (timetable_id, startTime, endTime, status) => {
    const existingTimetable = await Timetable.findByPk(timetable_id);
    if (!existingTimetable) throw new Error("Horario no encontrado.");

    // Verificamos si ya existe un horario en la base de datos con las mismas horas.
    if (startTime && startTime !== existingTimetable.startTime || endTime && endTime !== existingTimetable.endTime) {
        const existingTimetableWithTime = await Timetable.findOne({
            where: {
                [Op.or]: [
                    { startTime },
                    { endTime }
                ]
            }
        });

        if (existingTimetableWithTime && existingTimetableWithTime.id !== timetable_id) {
            throw new Error("Ya existe horario con las mismas horas de inicio o fin.");
        }
    }

    const [updatedRowsCount, [updatedTimetable]] = await Timetable.update(
        { startTime, endTime, status },
        {
            where: { id: timetable_id },
            returning: true // Esta opción devuelve el registro actualizado en el arreglo de resultados.
        }
    );

    if (updatedRowsCount === 0) throw new Error("No se pudo actualizar el horario.");

    // Retornamos el horario actualizado
    return updatedTimetable;
};

module.exports = updateTimetableByIdController;