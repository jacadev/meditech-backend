const { Pay, Appointment, Patient, Disponibilty, Doctor, Day, Timetable, Person, Specialty } = require("../../db.js");

const getAllAppointmentsController = async () => {
    const appointments = await Appointment.findAll({
        attributes: ["id", "date", "consultationReason", "status"],
        where: {
            status: true
        },
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

    return appointments;
};

module.exports = getAllAppointmentsController;