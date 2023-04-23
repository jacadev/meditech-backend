const { Op } = require("sequelize");
const { Patient, Rol, Person, Review, Appointment, Pay } = require('../../db');

const getAllPatientsController = async () => {
  const response = await Patient.findAll({
    attributes: ["id"],
    include: [
      {
        model: Person,
        attributes: [
          'userName',
          'email',
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
        model: Review,
        attributes: ['id', 'comment', 'rating'],
        where: {
          [Op.or]: [
            { status: true }, // mostramos solo las reviews activas
            { id: { [Op.is]: null } } // no hay relación con Review
          ]
        },
        required: false, // para permitir registros sin relación con Review               
      },    
      {
        model: Appointment,
        attributes: ["id", "date", "consultationReason"],
        include: [
          {
            model: Pay
          }
        ]
      }   
    ],
  });
  
  return response;
};

module.exports = getAllPatientsController;
