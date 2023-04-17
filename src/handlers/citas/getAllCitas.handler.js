const { getAllCitasController } = require("../../controllers");

const getAllCitasHandler = async (req, res) => {
    try {
        const allCitas = await getAllCitasController();

        if (!allCitas) throw new Error("Hubo un problema al obtener las citas")

        res.status(201).json(allCitas)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = getAllCitasHandler;