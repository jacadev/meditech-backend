const { Op } = require('sequelize');
const { Doctor, Specialty, Person, Rol, Review, Disponibilty, Day, Timetable } = require("../../db");

const getAllDoctorsController = async () => {
  const response = await Doctor.findAll({
    attributes: ['id', 'about_me', 'profile_image', 'tuition_code', 'consultation_cost', 'location', 'diseases_treated'],
    include: [
      {
        model: Specialty,
        attributes: ["specialty"],
        where: {
          status: true
        },
        through: { attributes: [] },
      },
      {
        model: Person,
        attributes: ['user_name', 'email', 'first_name', 'last_name', 'phone', 'age', 'gender', 'password', 'status'],
        where: {
          status: true
        },
        include: [
          {
            model: Rol,
            attributes: ['name_rol'],
            where: {
              status: true
            },
          }
        ]
      },
      {
        model: Disponibilty,
        attributes: ["id", "date", "status"],
        where: {
          status: true
        },
        include: [
          {
            model: Day,
            attributes: ["id", "day", "status"],
            where: {
              status: true
            },
          },
          {
            model: Timetable,
            attributes: ["id", "startTime", "endTime", "status"],
            where: {
              status: true
            },
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
      },
    ]
  })

  // console.log('estoy buscando a mis doctores', response);
  return response;
};

module.exports = getAllDoctorsController;
