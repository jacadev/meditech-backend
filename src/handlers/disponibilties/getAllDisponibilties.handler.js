const { getAllDisponibiltiesController } = require("../../controllers");

const getAllDisponibiltiesHandler = async (req, res) => {
    try {
        const allDisponibilties = await getAllDisponibiltiesController();

        if (!allDisponibilties) throw new Error("Hubo un problema al obtener las disponibilidades")

        return res.status(201).json(allDisponibilties)
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = getAllDisponibiltiesHandler;