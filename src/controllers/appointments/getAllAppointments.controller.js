const { Pay, Appointment, Patient, Disponibilty, Doctor, Day, Timetable, Person, Specialty } = require("../../db.js");

const getAllAppointmentsController = async () => {
    const appointments = await Appointment.findAll({
        attributes: ["id", "date", "consultationReason", "status"],
        include: [
            {
                model: Patient,
                attributes: ["person_id"],
                include: [
                    {
                        model: Person,
                        attributes: ['first_name', 'last_name'],
                    },
                ],
            },
            {
                model: Disponibilty,
                attributes: ["date", "status"],
                include: [
                    {
                        model: Day,
                        attributes: ["day", "status"]
                    },
                    {
                        model: Timetable,
                        attributes: ["startTime", "endTime", "status"]
                    },
                    {
                        model: Doctor,
                        attributes: ["profileImage", "tuitionCode"],
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