const { Appointment, Patient, Disponibilty } = require("../../db.js");

const postAppointmentController = async (date, consultationReason, patient_id, disponibilty_id) => {
    if (!date || !patient_id || !disponibilty_id) throw new Error("Faltan datos obligatorios");

    // Verificar si la disponibilidad está disponible
    const disponibilty = await Disponibilty.findByPk(disponibilty_id, {
        include: {
            model: Appointment,
        },
    });

    if (disponibilty && disponibilty.appointments.length) {
        throw new Error("La disponibilidad ya ha sido reservada.");
    }

    // Crear el nuevo registro en la tabla Appointment
    const appointment = await Appointment.create({
        date,
        consultationReason,
        patient_id,
        disponibilty_id,
    });

    // Asociar el registro de Appointment con el registro de Patient
    const patient = await Patient.findByPk(patient_id);
    await appointment.setPatient(patient);

    // Asociar el registro de Appointment con el registro de Disponibility
    await appointment.setDisponibilty(disponibilty);

    return appointment;

};

module.exports = postAppointmentController;