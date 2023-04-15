require("dotenv").config();
const { Doctor, Specialty, Person } = require("../../db");
const axios = require("axios");


const getAllDoctorsController = async () => {

  const response = await Doctor.findAll({
    include: [
      {
        model: Specialty, 
        attributes: ['specialty'], 
        through: {attributes: []}
      },
      {
        model: Person,
        attributes: ['userName', 'email', 'firstName', 'lastName', 'phone', 'age', 'gender']
      }
    ]
  });

  console.log('estoy buscando a mis doctores', response);
  return response

};

module.exports = getAllDoctorsController;
