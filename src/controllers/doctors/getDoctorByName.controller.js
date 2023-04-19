const {Op, literal} = require('sequelize');
const { Doctor, Specialty, Person, Rol, Review, Day, Timetable } = require("../../db");

const getDoctorByNameController = async (doctorName) => {
  const nameFilter = doctorName.toLowerCase();

  const doctorFilter = await Doctor.findAll({
    include: [
      {
        model: Specialty,
        attributes: ['specialty'],
        through: { attributes: [] }
      },
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
        model: Day,
        attributes: ['day'],
        through: { attributes: [] }
      },
      {
        model: Timetable,
        attributes: ['startTime', 'endTime'],
        through: { attributes: [] }
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
        through: { attributes: [] },
      }
    ],
  });

  return doctorFilter;
};

module.exports = getDoctorByNameController;