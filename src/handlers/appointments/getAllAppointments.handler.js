const { getAllAppointmentsController } = require("../../controllers");

const getAllAppointmentsHandler = async (req, res) => {
    try {
        const allAppointments = await getAllAppointmentsController();

        if (!allAppointments) throw new Error("Hubo un problema al obtener las citas")

        return res.status(201).json(allAppointments)
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = getAllAppointmentsHandler;