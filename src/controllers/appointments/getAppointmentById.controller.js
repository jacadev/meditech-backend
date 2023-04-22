const { Pay, Appointment, Patient, Disponibilty, Doctor, Day, Timetable, Person, Specialty } = require("../../db.js");

const getAppointmentByIdController = async (appointment_id) => {
    const appointment = await Appointment.findOne({
        where: {
            id: appointment_id
        },
        attributes: ["id", "date", "consultationReason", "status"],
        include: [
            {
                model: Patient,
                attributes: ["id"],
                include: [
                    {
                        model: Person,
                        attributes: ['first_name', 'last_name'],
                    },
                ],
            },
            {
                model: Disponibilty,
                attributes: ["id", "date", "status"],
                include: [
                    {
                        model: Day,
                        attributes: ["id", "day", "status"]
                    },
                    {
                        model: Timetable,
                        attributes: ["id", "startTime", "endTime", "status"]
                    },
                    {
                        model: Doctor,
                        attributes: ["id", "profileImage", "tuitionCode"],
                        include: [
                            {
                                model: Person,
                                attributes: ['first_name', 'last_name', 'status'],
                            },
                            {
                                model: Specialty,
                                attributes: ["specialty"],
                                through: { attributes: [] },
                            },
                        ],
                    }
                ],
            },
            {
                model: Pay
            }
        ]
    });

    if (!appointment) throw new Error(`Hubo un problema la obtener la cita con el id: ${appointment_id}`);

    return appointment;
};

module.exports = getAppointmentByIdController;