const { Patient, Person } = require('../../db');

const postPatientController = async (
  user_name,
  email,
  password,
  first_name,
  last_name,
  phone,
  age,
  gender,
  rol
) => {

  const newPerson = await Person.create({
    userName: user_name,
    email: email,
    password: password,
    firstName: first_name,
    lastName: last_name,
    phone: phone,
    age: age,
    gender: gender,
    rol_id: rol,
  });
  const newPatient = await Patient.create({});

  await newPatient.setPerson(newPerson);
  await newPerson.setRol(rol);

  return newPerson;
};

module.exports = postPatientController;
