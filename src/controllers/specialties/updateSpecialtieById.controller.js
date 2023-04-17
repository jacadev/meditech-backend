const { Specialty } = require("../../db.js")

const updateSpecialtieByIdController = async (specialty_id, specialty, status) => {
    const existingSpecialty = await Specialty.findByPk(specialty_id);
    if (!existingSpecialty) throw new Error("Especialidad no encontrada.");

    // Verificamos si ya existe una especialidad en la base de datos con el mismo nombre.
    if (specialty && specialty !== existingSpecialty.specialty) {
        const existingSpecialtyWithName = await Specialty.findOne({ where: { specialty } });

        if (existingSpecialtyWithName && existingSpecialtyWithName.id !== specialty_id) {
            throw new Error("Ya existe una especialidad con ese nombre.");
        }
    }

    const [updatedRowsCount, [updatedSpecialty]] = await Specialty.update(
        { specialty, status },
        {
            where: { id: specialty_id },
            returning: true // Esta opción devuelve el registro actualizado en el arreglo de resultados.
        }
    );

    if (updatedRowsCount === 0) throw new Error("No se pudo actualizar la especialidad.");

    // Retornamos la especialidad actualizada.
    return updatedSpecialty;
};

module.exports = updateSpecialtieByIdController;