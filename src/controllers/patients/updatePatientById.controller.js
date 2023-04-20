const { Patient , Person} = require("../db");

const updatePatientByIdController = async (patient_id, email, password, first_name, last_name, phone, gender, status) => {
  const patient = await Patient.findByPk(patient_id);
    if (!patient) {
      return res.status(404).json({ message: "Paciente no encontrado" });
    }

    const person = await Person.findByPk(patient.person_id);
    if (!person) {
      return res.status(404).json({ message: "Persona no encontrada" });
    }

    await person.update({
      email,
      password,
      firstName: first_name,
      lastName: last_name,
      phone,
      gender,
      status
    });

};

module.exports = updatePatientByIdController;