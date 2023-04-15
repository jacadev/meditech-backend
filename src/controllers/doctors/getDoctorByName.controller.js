const { Op } = require("sequelize");
const { Doctor, Specialty, Person, Rol } = require("../../db");

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
        ]
      }
    ],
    where: {
      [Op.or]: [
        { firstName: { [Op.like]: `%${nameFilter}%` } },
        { lastName: { [Op.like]: `%${nameFilter}%` } },
        { [Op.and]: Sequelize.literal(`lower(concat("firstName", ' ', "lastName")) like '%${nameFilter}%'`) }
      ]
    }
  });

  return doctorFilter;
};

module.exports = getDoctorByNameController;