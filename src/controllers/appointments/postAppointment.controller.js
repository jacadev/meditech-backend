const {
  Appointment,
  Patient,
  Disponibilty,
  Doctor,
  Person,
  Specialty,
  Timetable,
} = require("../../db.js");
const sendMail = require("../../mailer/sendMail.mailer");
const appointmentBookedHtml = require("../../mailer/templates/appointmentBooked.template");

const postAppointmentController = async (
  date,
  consultationReason,
  patient_id,
  disponibilty_id,
  preload
) => {
  if (!date || !patient_id || !disponibilty_id)
    throw new Error("Faltan datos obligatorios");

  // Verificar si la disponibilidad está disponible
  const disponibilty = await Disponibilty.findByPk(disponibilty_id, {
    include: [
      {
        model: Appointment,
      },
      {
        model: Doctor,
        attributes: ["id"],
        include: [
          {
            model: Person,
            attributes: ["first_name", "last_name"],
          },
          {
            model: Specialty,
            attributes: ["specialty"],
            through: { attributes: [] },
          },
        ],
      },
      {
        model: Timetable,
      },
    ],
  });

  if (disponibilty && disponibilty.appointments.length) {
    throw new Error("La disponibilidad ya ha sido reservada.");
  }

  // Crear el nuevo registro en la tabla Appointment
  const appointment = await Appointment.create({
    date,
    consultationReason,
    patient_id,
    disponibilty_id,
  });

  // Asociar el registro de Appointment con el registro de Patient
  const patient = await Patient.findByPk(patient_id, {
    include: [
      {
        model: Person,
        attributes: ["first_name", "last_name", "email"],
      },
    ],
  });
  await appointment.setPatient(patient);

  // Asociar el registro de Appointment con el registro de Disponibility
  await appointment.setDisponibilty(disponibilty);

  if (preload === false) {
    
    let drFirstName = disponibilty.doctor.person.dataValues.first_name;
    let drLastName = disponibilty.doctor.person.dataValues.last_name;
    let specialty = disponibilty.doctor.specialties[0].dataValues.specialty;
    let dateApt = appointment.dataValues.date;
    let timeApt = disponibilty.timetable.dataValues.startTime;
    let patientFirstName = patient.person.dataValues.first_name;
    let patientLastName = patient.person.dataValues.last_name;
    let patientEmail = patient.person.dataValues.email;

    const mailInfo = {
      email: patientEmail,
      firstName: patientFirstName,
      lastName: patientLastName,
      get fullName() {
        return `${this.firstName} ${this.lastName}`;
      },
      patientName: patientFirstName,
      appointmentDate: dateApt,
      appointmentTime: timeApt,
      drFirstName: drFirstName,
      drLastName: drLastName,
      get doctorName() {
        return `${this.drFirstName} ${this.drLastName}`;
      },
      specialty: specialty,
      subject: "Cita reservada exitosamente",
    };

    await sendMail(mailInfo, appointmentBookedHtml);
  }

  return appointment;
};

module.exports = postAppointmentController;
