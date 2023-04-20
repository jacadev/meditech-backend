const { Appointment, Patient, Disponibilty, Doctor, Day, Timetable, Person, Specialty } = require("../../db.js");

const getAllAppointmentsController = async () => {
    const appointments = await Appointment.findAll({
        attributes: ["id", "date", "consultationReason"],
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
                attributes: ["date"],
                include: [
                    {
                        model: Day,
                        attributes: ["day"]
                    },
                    {
                        model: Timetable,
                        attributes: ["startTime", "endTime"]
                    },
                    {
                        model: Doctor,
                        attributes: ["profileImage", "tuitionCode"],
                        include: [
                            {
                                model: Person,
                                attributes: ['first_name', 'last_name'],
                            },
                            {
                                model: Specialty,
                                attributes: ["specialty"],
                                through: { attributes: [] },
                            },
                        ],
                    }
                ],
            }
        ]
    });

    return appointments;
};

module.exports = getAllAppointmentsController;