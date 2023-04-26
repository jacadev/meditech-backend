const { Op, literal } = require('sequelize');
const { Doctor, Specialty, Person, Rol, Review, Disponibilty, Day, Timetable } = require("../../db");

const getDoctorByNameController = async (doctorName) => {
  const nameFilter = doctorName.toLowerCase();

  const doctorFilter = await Doctor.findAll({
    attributes: ['id', 'about_me', 'profile_image', 'tuition_code', 'consultation_cost', 'location', 'diseases_treated'],
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
            {
              [Op.or]: [
                { first_name: { [Op.like]: `%${nameFilter}%` } },
                { last_name: { [Op.like]: `%${nameFilter}%` } },
                { [Op.and]: literal(`lower(concat("first_name", ' ', "last_name")) like '%${nameFilter}%'`) },
              ]
            },
            { id: { [Op.in]: literal(`(SELECT "doctor_id" FROM "doctor_specialties" WHERE "specialty_id" IN (SELECT id FROM "specialties" WHERE "specialty" ILIKE '%${nameFilter}%'))`) } }
          ]
        }
      },
      {
        model: Disponibilty,
        attributes: ["id", "date", "status"],
        include: [
          {
            model: Day,
            attributes: ["id", "day", "status"],
          },
          {
            model: Timetable,
            attributes: ["id", "startTime", "endTime", "status"],
          },
        ],
      },
      {
        model: Review,
        attributes: ['id', 'comment', 'rating'],
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