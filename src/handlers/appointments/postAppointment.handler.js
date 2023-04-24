const { postAppointmentController } = require("../../controllers");

const postAppointmentHandler = async (req, res) => {
    const { date, consultationReason, patient_id, disponibilty_id, preload } = req.body;
    try {
        const newAppointment = await postAppointmentController(date, consultationReason, patient_id, disponibilty_id, preload);

        return res.status(201).json(newAppointment);
        // return res.status(201).send("Cita creada con éxito.");
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = postAppointmentHandler;