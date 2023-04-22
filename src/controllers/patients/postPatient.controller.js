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

//   if (!user_name || !email || !password || !first_name || !last_name || !phone || !age || gender) throw new Error("Faltan datos obligatorios.")
  
//   // Validar la propiedad phone
//   if (phone.length > 10) {
//     throw new Error("El número de teléfono proporcionado no es válido. Debe tener un máximo de 10 dígitos.");
// }

// // Validar la propiedad email
// const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// if (!regexEmail.test(email)) {
//     throw new Error("El correo electrónico proporcionado no es válido.");
// }
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

  return newPatient;
};

module.exports = postPatientController;
