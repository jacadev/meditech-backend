const { getAllDaysController } = require("../../controllers");

const getAllDaysHandler = async (req, res) => {
    try {
        const allDays = await getAllDaysController();

        if (!allDays) throw new Error("Hubo un problema al obtener las Días")

        return res.status(201).json(allDays)
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = getAllDaysHandler;