require('dotenv').config();
const { Patient, Rol, Person } = require('../../db');

const getAllPatientsController = async () => {
  const response = await Patient.findAll({
    include: [
      {
        model: Person,
        attributes: [
          'userName',
          'email',
          "password",
          'firstName',
          'lastName',
          'phone',
          'age',
          'gender',
          'rol_id',
        ],
        include: [
          {
            model: Rol,
            attributes: ['nameRol'],
          },
        ],
      },
    ],
  });
  return response;
};

module.exports = getAllPatientsController;
