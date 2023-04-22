const { updateAppointmentByIdController } = require("../../controllers");

const updateAppointmentByIdHandler = async (req, res) => {
    const { appointment_id } = req.params;
    const { date, consultationReason, disponibilty_id, status } = req.body;
    try {
        const result = await updateAppointmentByIdController(appointment_id, date, consultationReason, disponibilty_id, status);
        return res.status(201).json(result);
        // return res.status(201).send('Cita actualizada con éxito');
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

module.exports = updateAppointmentByIdHandler;