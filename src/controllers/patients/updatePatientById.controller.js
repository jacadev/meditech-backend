const { Patient , Person} = require("../../db");

const updatePatientByIdController = async (patient_id, email, password, first_name, last_name, phone, gender, rol, status) => {
  const patient = await Patient.findByPk(patient_id);
    if (!patient) {
      return res.status(404).json({ message: "Paciente no encontrado" });
    }

    const person = await Person.findByPk(patient.person_id);
    if (!person) {
      return res.status(404).json({ message: "Persona no encontrada" });
    }

    const updateData = {};
    if (email) updateData.email = email;
    if (password) updateData.password = password;
    if (first_name) updateData.first_name = first_name;
    if (last_name) updateData.last_name = last_name;
    if (phone) updateData.phone = phone;
    if (gender) updateData.gender = gender;
    updateData.status = status;

    if(rol.length) await person.setRol(rol)

    await person.update(updateData)
    // await person.update({
    //   email,
    //   password,
    //   firstName: first_name,
    //   lastName: last_name,
    //   phone,
    //   gender,
    //   status
    // });
    return person
};

module.exports = updatePatientByIdController;