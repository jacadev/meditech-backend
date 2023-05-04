const { Doctor, Person } = require("../../db");

const updateDoctorByIdController = async (doctor_id, email, age, first_name, last_name, phone, status, about_me, profile_image, consultation_cost, location, diseases_treated, disponibilties_id, specialties) => {

  const doctor = await Doctor.findByPk(doctor_id);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor no encontrado" });
    }

    const person = await Person.findByPk(doctor.person_id);
    if (!person) {
      return res.status(404).json({ message: "Persona no encontrada" });
    }

    await person.update({
      email,
      firstName: first_name,
      lastName: last_name,
      phone,
      age,
      status
    });

    await doctor.update({
      aboutMe: about_me,
      profileImage: profile_image,
      consultationCost: consultation_cost,
      location,
      diseasesTreated: diseases_treated
    });
    // console.log('los modelos de doctor', doctor.__proto__);
    if (specialties) await doctor.setSpecialties(specialties);
    await doctor.setDisponibilties(disponibilties_id);
    
    return "put realizado con exito"
};

module.exports = updateDoctorByIdController;