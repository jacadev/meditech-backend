const { getAllAppointmentsOfPatientByIdController } = require("../../controllers");

const getAllAppointmentsOfPatientByIdHandler = async (req, res) => {
    const { patient_id } = req.params;
    try {
        const appointementsOfPatient = await getAllAppointmentsOfPatientByIdController(patient_id);
        return res.status(201).json(appointementsOfPatient);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = getAllAppointmentsOfPatientByIdHandler;