require("dotenv").config();
const { Doctor, Specialty, Person, Rol } = require("../../db");

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
        attributes: ['user_name', 'email', 'first_name', 'last_name', 'phone', 'age', 'gender','password'],
        include: [
          {
            model: Rol,
            attributes: ['name_rol']
          }
        ]
      }
    ]
  })

  // console.log('estoy buscando a mis doctores', response);
  return response;
};

module.exports = getAllDoctorsController;
