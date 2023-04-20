const { postTimetableController } = require("../../controllers");

const postTimetableHandler = async (req, res) => {
    const { startTime, endTime } = req.body;
    try {
        const newTimetable = await postTimetableController(startTime, endTime);

        return res.status(201).json(newTimetable);
        // return res.status(201).send('Horario creado con éxito');
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = postTimetableHandler;