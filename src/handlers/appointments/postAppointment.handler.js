const { postAppointmentController } = require("../../controllers");

const postAppointmentHandler = async (req, res) => {
    const { date, consultationReason, patient_id, doctor_id } = req.body;
    try {
        const newAppointment = await postAppointmentController(date, time, consultationReason, patient_id, doctor_id);

        return res.status(201).json(newAppointment);
        // return res.status(201).send("Cita creada con éxito.");
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = postAppointmentHandler;