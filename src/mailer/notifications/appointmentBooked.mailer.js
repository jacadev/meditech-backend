require("dotenv").config();
const { SIB_API_KEY } = process.env;
const SibApiSDK = require("sib-api-v3-sdk");
const SibClient = SibApiSDK.ApiClient.instance;
SibClient.authentications["api-key"].apiKey = SIB_API_KEY;
const transactionEmailApi = new SibApiSDK.TransactionalEmailsApi();
let smtpMailData = new SibApiSDK.SendSmtpEmail();

const sender = {
  email: "notificaciones@meditech-app.com", // your email address
  name: "MediTech",
};

const SendWaitlistEmail = async (userData, template) => {
  try {
    smtpMailData.sender = sender;

    smtpMailData.to = [
      {
        email: userData.email,
        name: userData.fullname,
      },
    ];

    smtpMailData.subject = userData.subject;
    smtpMailData.params = userData;
    smtpMailData.htmlContent = template; // send email

    await transactionEmailApi
      .sendTransacEmail(smtpMailData)
      .then((data) => {
        console.log(data); // log the email id
      })
      .catch((error) => {
        console.error(error);
        throw new Error(error); // handle errors
      });
  } catch (error) {
    console.log("An error occured...");
    console.error(error);
    throw new Error(error); // handle errors
  }
};

const testData = {
  email: "icroosfire22@gmail.com",
  firstName: "Nicolas",
  lastName: "Flores",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  patientName: "Nicolas",
  appointmentDate: "5 de mayo de 2023",
  appointmentTime: "4:00 pm",
  drFirstName: "Carlos",
  drLastName: "Vargas",
  get doctorName() {
    return `${this.drFirstName} ${this.drLastName}`;
  },
  specialty: "Medicina Interna",
  subject: "Cita reservada exitosamente",
};

const htmlContent = require("../templates/appointmentBooked.template");

SendWaitlistEmail(testData, htmlContent);
