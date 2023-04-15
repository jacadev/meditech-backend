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
<<<<<<< HEAD
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
=======
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
>>>>>>> a012529e2b256537fdd4df7f47c95dcefb3deef3

  // console.log('estoy buscando a mis doctores', response);
  return response;
};

module.exports = getAllDoctorsController;
