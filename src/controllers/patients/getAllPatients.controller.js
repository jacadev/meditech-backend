require('dotenv').config();
const { Patient, Rol, Person, Review } = require('../../db');

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
      {
        model: Review               
      },       
    ],
  });
  return response;
};

module.exports = getAllPatientsController;
