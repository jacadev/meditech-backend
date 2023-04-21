const { Op } = require('sequelize');
const { Doctor, Specialty, Person, Rol, Review, Disponibilty, Day, Timetable } = require("../../db");

const getDoctorByIdController = async (doctorId) => {
  const doctor = await Doctor.findOne({
    where: {
      id: doctorId
    },
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
        ]
      },
      {
        model: Disponibilty,
        attributes: ["date", "status"],
        include: [
          {
            model: Day,
            attributes: ["day", "status"],
          },
          {
            model: Timetable,
            attributes: ["startTime", "endTime", "status"],
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
  });

  if (!doctor) throw new Error(`Hubo un problema la obtener el doctor con el id: ${doctorId}`);

  return doctor;
};

module.exports = getDoctorByIdController;