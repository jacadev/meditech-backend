const { getAllTimetablesController } = require("../../controllers");

const getAllTimetablesHandler = async (req, res) => {
    try {
        const allTimetables = await getAllTimetablesController();

        if (!allTimetables) throw new Error("Hubo un problema al obtener los horarios.")

        return res.status(201).json(allTimetables)
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = getAllTimetablesHandler;