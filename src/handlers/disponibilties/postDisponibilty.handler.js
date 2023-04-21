const { postDisponibiltyController } = require("../../controllers");

const postDisponibiltyHandler = async (req, res) => {
    const { date, day_id, timetable_ids, doctor_id } = req.body;
    try {
        const newDisponibilty = await postDisponibiltyController(date, day_id, timetable_ids, doctor_id);

        return res.status(201).json(newDisponibilty);
        // return res.status(201).send("Disponibilidad creada con éxito");
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = postDisponibiltyHandler;