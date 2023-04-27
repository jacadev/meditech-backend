const { Patient, Person } = require('../../db');
const bcrypt = require('bcrypt');

const updateProfileSettingsPatientByIdController = async (
  patient_id,
  user_name,
  email,
  password,
  phone
) => {
  
  const patient = await Patient.findByPk(patient_id);
  
  if (!patient) {
    return { status: 404, message: 'Paciente no encontrado' };
  }

  const person = await Person.findByPk(patient.person_id);
  
  if (!person) {
    return { status: 404, message: 'Persona no encontrada' };
  }

  const personSettings = await person.update({
    userName: user_name,
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: bcrypt.hashSync(password, 8),
    phone: phone ,
    gender: gender
  },
  {
    where: {
      id: person.id
    }
  });
  

  return personSettings;
};

module.exports = updateProfileSettingsPatientByIdController;
