const { getAppointmentByIdController } = require("../../controllers");

const getAppointmentByIdHandler = async (req, res) => {
    const { appointment_id } = req.params;
    try {
        const appointmentById = await getAppointmentByIdController(appointment_id);
        return res.status(200).json(appointmentById);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = getAppointmentByIdHandler;