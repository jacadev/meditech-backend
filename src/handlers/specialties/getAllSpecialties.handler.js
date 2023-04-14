const { getAllSpecialtiesController } = require("../../controllers");

const getAllSpecialtiesHandler = async (req, res) => {
    try {
        const allSpecialties = await getAllSpecialtiesController();

        if(!allSpecialties) throw new Error("Hubo un problema al obtener las especialidades.")

        res.status(201).json(allSpecialties);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
};

module.exports = getAllSpecialtiesHandler;