const { Patient, Person, Rol, Review, Appointment, Pay } = require("../../db");
const { Op } = require('sequelize');

const getPatientByIdController = async (patient_id) => {
  const patient = await Patient.findOne({
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
            attributes: ['nameRol'],
          },
        ],
      },
      {
        model: Review,
        attributes: ['comment', 'rating'],
        where: {
          [Op.or]: [
            { status: true }, // mostramos solo las reviews activas
            { id: { [Op.is]: null } } // no hay relación con Review
          ]
        },
        required: false, // para permitir registros sin relación con Review
      },
      {
        model: Appointment,
        include: [
          {
            model: Pay
          }
        ]
      }
    ],
  });

  if (!patient) throw new Error(`Hubo un problema la obtener el paciente con el id: ${patient_id}`);

  return patient;
};

module.exports = getPatientByIdController;