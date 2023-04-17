const { Cita } = require("../../db.js")

const postCitaController = async (firstName, lastName, dni, phone, email, comment, date, hour, dataTreatment, receiveCommunication) => {

    if (!firstName || !lastName || !dni || !phone || !email || !comment || !date || !hour || !dataTreatment) throw new Error("Faltan datos obligatorios.")

    // Validar la propiedad dni
    if (dni.length > 10) {
        throw new Error("El número de DNI proporcionado no es válido. Debe tener un máximo de 10 dígitos.");
    }

    // Validar la propiedad phone
    if (phone.length > 10) {
        throw new Error("El número de teléfono proporcionado no es válido. Debe tener un máximo de 10 dígitos.");
    }

    // Validar la propiedad email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        throw new Error("El correo electrónico proporcionado no es válido.");
    }

    // Validar la propiedad date
    const timestamp = Date.parse(date);
    if (isNaN(timestamp)) {
        throw new Error("La fecha proporcionada no es válida.");
    }

    // Validar la propiedad hour
    const regexHour = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
    if (!regexHour.test(hour)) {
        throw new Error("La hora proporcionada no es válida. Debe estar en formato de 24 horas.");
    }

    const newCita = await Cita.create({ firstName, lastName, dni, phone, email, comment, date, hour, dataTreatment, receiveCommunication })

    return newCita;

};

module.exports = postCitaController;
