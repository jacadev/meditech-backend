const { getAllDisponibiltiesController } = require("../../controllers");

const getAllDisponibiltiesHandler = async (req, res) => {
    try {
        const allDisponibilties = await getAllDisponibiltiesController();

        if (!allDisponibilties) throw new Error("Hubo un problema al obtener las disponibilidades")

        res.status(201).json(allDisponibilties)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = getAllDisponibiltiesHandler;