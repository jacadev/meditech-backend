const { updateTimetableByIdController } = require("../../controllers");

const updateTimetableByIdHandler = async (req, res) => {
    const { timetable_id } = req.params;
    const { startTime, endTime, status } = req.body;

    try {
        const result = await updateTimetableByIdController(timetable_id, startTime, endTime, status);
        return res.status(201).json(result);
        // return res.status(201).send('Horario actualizado con éxito');
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

module.exports = updateTimetableByIdHandler;