const { Patient, Person, Appointment, Disponibilty, Doctor, Day, Timetable, Specialty } = require('../../db');

const getAllAppointmentsOfPatientByIdController = async (patient_id) => {

    // Verificar si el paciente existe en la base de datos
    const patientExists = await Patient.findOne({
        where: {
            id: patient_id
        }
    });

    if (!patientExists) {
        throw new Error(`El paciente con el id ${patient_id} no existe en la base de datos.`);
    }

    const response = await Appointment.findAll({
        attributes: ["id", "date", "consultationReason", "status"],
        include: [
            {
                model: Patient,
                attributes: ["id"],
                where: {
                    id: patient_id
                },
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
        ]
    })

    if (response.length === 0) {
        throw new Error(`El paciente con el id ${patient_id} no tiene citas programadas.`);
    }

    return response;
};

module.exports = getAllAppointmentsOfPatientByIdController;