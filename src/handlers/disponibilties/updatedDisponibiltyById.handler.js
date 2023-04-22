const { updatedDisponibiltyByIdController } = require("../../controllers");

const updatedDisponibiltyByIdHandler = async (req, res) => {
    const { disponibilty_id } = req.params;
    const { date, day_id, timetable_id, status } = req.body;

    try {
        const result = await updatedDisponibiltyByIdController(disponibilty_id, date, day_id, timetable_id, status);
        return res.status(201).json(result);
        // return res.status(201).send('Disponibilidad actualizada con éxito');
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

module.exports = updatedDisponibiltyByIdHandler;