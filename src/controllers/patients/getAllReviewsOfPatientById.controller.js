const { Patient, Person, Rol, Review } = require("../../db");

const getAllReviewsOfPatientByIdController = async (patient_id) => {
    const reviewsOfPatient = await Patient.findOne({
        where: {
            id: patient_id
        },
        attributes: ["id"],
        include: [
            {
                model: Person,
                attributes: [
                    'userName',
                    'email',
                    'firstName',
                    'lastName',
                    'phone',
                    'age',
                    'gender',
                    'rol_id',
                ],
                include: [
                    {
                        model: Rol,
                        attributes: ['id', 'nameRol'],
                    },
                ],
            },
            {
                model: Review,
                attributes: ['id', 'comment', 'rating', 'status', 'comment_date'],
                required: false, // para permitir registros sin relación con Review
            },
        ],
    });

    if (reviewsOfPatient.length === 0) {
        throw new Error(`Hubo un problema al obtener los datos del paciente con el id: ${patient_id}.`);
    }

    return reviewsOfPatient;
}

module.exports = getAllReviewsOfPatientByIdController;