const { Op } = require('sequelize');
const { Doctor, Specialty, Person, Rol, Review, Disponibilty, Day, Timetable, Patient } = require("../../db");

const getDoctorByIdController = async (doctor_id) => {
  const doctor = await Doctor.findOne({
    where: {
      id: doctor_id
    },
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
        ]
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
        include: [
          {
                model: Patient,
                attributes: ["id"],
                include: [
                    {
                        model: Person,
                        attributes: ['first_name', 'last_name', 'status'],
                        include: [
                            {
                                model: Rol,
                                attributes: ['name_rol'],
                            }
                        ]
                    },
                ],
            },
        ],
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

  if (!doctor) throw new Error(`Hubo un problema la obtener el doctor con el id: ${doctor_id}`);

  return doctor;
};

module.exports = getDoctorByIdController;