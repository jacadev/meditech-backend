const { Appointment } = require("../../db");
const { Op } = require("sequelize");

const updateAppointmentByIdController = async (appointment_id, date, consultationReason, disponibilty_id, status) => {
    const appointment = await Appointment.findByPk(appointment_id);

    if (!appointment) throw new Error("La cita no existe");

    // Validar que el nuevo disponibility_id no esté en uso por otro appointment
    if (disponibilty_id) {
        const appointmentWithSameDisponibility = await Appointment.findOne({
            where: {
                disponibilty_id: disponibilty_id,
                id: {
                    [Op.ne]: appointment_id
                }
            }
        });

        if (appointmentWithSameDisponibility) throw new Error("El horario ya está ocupado");
    }

    // Actualizar solo los campos que se proporcionan en el body
    const updateData = {};
    if (date) updateData.date = date;
    if (consultationReason) updateData.consultationReason = consultationReason;
    if (disponibilty_id) updateData.disponibilty_id = disponibilty_id;
    if (status) updateData.status = status;

    await appointment.update(updateData);

    return appointment;
};

module.exports = updateAppointmentByIdController;