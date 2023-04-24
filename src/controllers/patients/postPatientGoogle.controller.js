const { Patient, Person } = require('../../db');

const postPatientGoogleController = async (
  user_name,
  email,
  rol
) => {

  // Verificar si la persona ya existe en la base de datos
  const existingPerson = await Person.findOne({
    where: { email },
    attributes: ['email', 'userName']
  });

  if (existingPerson) {
    // La persona ya existe, devolver el email y user_name de la persona existente
    return { email: existingPerson.email, user_name: existingPerson.userName, id: existingPerson.id };
  } else {
    // La persona no existe, crear una nueva persona
    const newPerson = await Person.create({
      userName: user_name,
      email: email,
      rol_id: rol,
    });

    // Crear el paciente relacionado con la nueva persona
    const newPatient = await Patient.create({});
    await newPatient.setPerson(newPerson);
    await newPerson.setRol(rol);

    // Devolver el email y user_name de la nueva persona
    return { email: newPerson.email, user_name: newPerson.userName, id: newPerson.id };
  }
};

module.exports = postPatientGoogleController;
