require("dotenv").config();
const { Doctor, Specialty, Person, Rol } = require("../../db");

const getAllDoctorsController = async () => {
  const response = await Doctor.findAll({
    include: [
      {
        model: Specialty,
        attributes: ["specialty"],
        through: { attributes: [] },
      },
      {
        model: Person,
        attributes: [
          "userName",
          "email",
          "firstName",
          "lastName",
          "phone",
          "age",
          "gender",
          "rol_id",
        ],
        include: [
          {
            model: Rol,
            attributes: ["nameRol"],
          },
        ],
      },
    ],
  });

  // console.log('estoy buscando a mis doctores', response);
  return response;
};

module.exports = getAllDoctorsController;
