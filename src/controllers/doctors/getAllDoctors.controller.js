const { Op } = require('sequelize');
const { Doctor, Specialty, Person, Rol, Review, Disponibilty, Day, Timetable } = require("../../db");

const getAllDoctorsController = async () => {
  const response = await Doctor.findAll({
    attributes: ['id', 'about_me', 'profile_image', 'tuition_code', 'consultation_cost', 'location', 'diseases_treated'],
    include: [
      {
        model: Specialty,
        attributes: ["specialty"],
        through: { attributes: [] },
      },
      {
        model: Person,
        attributes: ['user_name', 'email', 'first_name', 'last_name', 'phone', 'age', 'gender', 'password'],
        include: [
          {
            model: Rol,
            attributes: ['name_rol']
          }
        ]
      },
      {
        model: Disponibilty,
        attributes: ["date"],
        include: [
          {
            model: Day,
            attributes: ["day"],
          },
          {
            model: Timetable,
            attributes: ["startTime", "endTime"],
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
        through: { attributes: [] },
      },
    ]
  })

  // console.log('estoy buscando a mis doctores', response);
  return response;
};

module.exports = getAllDoctorsController;
