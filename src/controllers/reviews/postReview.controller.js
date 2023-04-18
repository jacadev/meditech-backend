const { Review, Patient, Doctor } = require("../../db.js");

const postReviewController = async (comment, rating, patient_id, doctor_id) => {
    if (!comment || !rating || !patient_id || !doctor_id) throw new Error("Faltan datos obligatorios");

    // Creamos una nueva instancia de la tabla Review con los datos proporcionados
    const review = await Review.create({ comment, rating, patient_id, doctor_id });

    // Buscamos al paciente correspondiente en la tabla Patient
    const patient = await Patient.findByPk(patient_id);

    // Validamos si el paciente existe
    if (!patient) throw new Error("El paciente no existe");

    // Asociamos la review con el paciente
    await patient.addReview(review);

    // Buscamos al doctor correspondiente en la tabla Doctor
    const doctor = await Doctor.findByPk(doctor_id);

    // Validar si el médico existe
    if (!doctor) throw new Error("El doctor no existe");

    // Asociamos la review con el doctor
    await doctor.addReview(review);

    return review;
}

module.exports = postReviewController;