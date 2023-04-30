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

  person.userName = user_name;
  person.email = email;
  const hashedPassword = await bcrypt.hash(password, 10);
  person.password = hashedPassword;
  person.phone = phone;
  await person.save();
  
  return person;
  
};

module.exports = updateProfileSettingsPatientByIdController;
