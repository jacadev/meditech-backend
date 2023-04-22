const { Op, literal } = require("sequelize");
const { Patient, Person, Rol, Review, Appointment, Pay } = require("../../db");

const getPatientByNameController = async (patientName) => {
  const nameFilter = patientName.toLowerCase();

  const patientFilter = await Patient.findAll({
    attributes: ["id"],
    include: [
      {
        model: Person,
        attributes: ['userName', 'email', 'firstName', 'lastName', 'phone', 'age', 'gender', 'rol_id'],
        include: [
          {
            model: Rol,
            attributes: ['nameRol']
          }
        ],
        where: {
          [Op.or]: [
            { first_name: { [Op.like]: `%${nameFilter}%` } },
            { last_name: { [Op.like]: `%${nameFilter}%` } },
            { [Op.and]: literal(`lower(concat("first_name", ' ', "last_name")) like '%${nameFilter}%'`) }
          ]
        }
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

  return patientFilter;

};

module.exports = getPatientByNameController;