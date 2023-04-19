const { Doctor, Person } = require("../../db");

const updateDoctorByIdController = async (doctor_id, phone, about_me, consultation_cost, location, diseases_treated) => {

  const doctor = await Doctor.findByPk(doctor_id);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor no encontrado" });
    }

    const person = await Person.findByPk(doctor.person_id);
    if (!person) {
      return res.status(404).json({ message: "Persona no encontrada" });
    }

    await person.update({
      phone,
    });

    await doctor.update({
      aboutMe: about_me,
      consultationCost: consultation_cost,
      location,
      diseasesTreated: diseases_treated
    });
    
    return doctor
};

module.exports = updateDoctorByIdController;