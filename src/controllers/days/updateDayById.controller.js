const { Day } = require("../../db.js");

const updateDayByIdController = async (day_id, day, status) => {
    const existingDay = await Day.findByPk(day_id);
    if (!existingDay) throw new Error("Día no encontrado.");

    // Verificamos si ya existe un día en la base de datos con el mismo nombre.
    if (day && day !== existingDay.day) {
        const existingDayWithDay = await Day.findOne({ where: { day } });

        if (existingDayWithDay && existingDayWithDay.id !== day_id) {
            throw new Error("Ya existe un día con ese nombre.");
        }
    }

    const [updatedRowsCount, [updatedDay]] = await Day.update(
        { day, status },
        {
            where: { id: day_id },
            returning: true // Esta opción devuelve el registro actualizado en el arreglo de resultados.
        }
    );

    if (updatedRowsCount === 0) throw new Error("No se pudo actualizar el día.");

    // Retornamos el día actualizado.
    return updatedDay;
};

module.exports = updateDayByIdController;