const { Doctor, Specialty, Person, Rol } = require("../../db");

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
      }
    ]
  });

  if(!doctor) throw new Error(`Hubo un problema la obtener el doctor con el id: ${doctorId}`);

  return doctor;
};

module.exports = getDoctorByIdController;