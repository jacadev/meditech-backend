const { Doctor, Specialty, Person, Rol, Review } = require("../../db");

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
        model: Review,
        attributes: ['comment', 'rating'],
        where: { status: true }, //mostramos solo las reviews activas
        through: { attributes: [] },
      }
    ]
  });

  if (!doctor) throw new Error(`Hubo un problema la obtener el doctor con el id: ${doctorId}`);

  return doctor;
};

module.exports = getDoctorByIdController;