const { Specialty } = require("../../db.js")

const postSpecialtieController = async (specialty) => {
    if (!specialty) throw new Error("Faltan datos obligatorios.")

    // Buscar si ya existe una especialidad con el mismo nombre
    const existingSpecialty = await Specialty.findOne({ where: { specialty } });

    // Si ya existe, lanzamos un error
    if (existingSpecialty) {
        throw new Error("Ya existe una especialidad con el nombre ingresado.");
    }

    // Si no existe, crear nueva especialidad
    const newSpecialty = await Specialty.create({ specialty });

    return newSpecialty;
};

module.exports = postSpecialtieController;