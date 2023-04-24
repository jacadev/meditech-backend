require("dotenv").config();
const SibApiSDK = require("sib-api-v3-sdk");
const SibClient = SibApiSDK.ApiClient.instance;
SibClient.authentications["api-key"].apiKey =
  "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";
const transactionEmailApi = new SibApiSDK.TransactionalEmailsApi();
let smtpMailData = new SibApiSDK.SendSmtpEmail();

const sendMail = async (userData, template) => {
  try {
    smtpMailData.sender = {
      email: "notificaciones@meditech-app.com", // your email address
      name: "Meditech",
    };

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

module.exports = sendMail;
