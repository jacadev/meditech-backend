const { Appointment, Patient, Doctor } = require("../../db.js");

const postAppointmentController = async (date, time, consultationReason, patient_id, doctor_id) => {
    if(!date || !patient_id || !doctor_id) throw new Error("Faltan datos obligatorios");

    const appointment = await Appointment.create({
        date,
        consultationReason,
        patient_id,
        doctor_id
    });

    // buscamos tanto al paciente como al doctor en la base de datos
    const patient = await Patient.findByPk(patient_id);
    const doctor = await Doctor.findByPk(doctor_id);

    // si no se encuentra el paciente o el doctor salta el error
    if (!patient || !doctor) {
        throw new Error('Paciente o médico no encontrado');
    }

    await appointment.setPatient(patient);
    await appointment.setDoctor(doctor);

    return appointment;
};

module.exports = postAppointmentController;