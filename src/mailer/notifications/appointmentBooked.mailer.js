const SibApiSDK = require("sib-api-v3-sdk");

// instantiate new SendinBlue API client
const SibClient = SibApiSDK.ApiClient.instance;

// Authentication
SibClient.authentications["api-key"].apiKey =
  process.env.SIB_API_KEY ||
  "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";

const transactionEmailApi = new SibApiSDK.TransactionalEmailsApi();

let smtpMailData = new SibApiSDK.SendSmtpEmail();

const sender = {
  email: "no-reply@meditech-app.com", // your email address
  name: "Jesus Castle",
};

const testData = {
  email: "jaca.btc@gmail.com",
  name: "Benito",
  fullname: "Benito Camelo",
};

const SendWaitlistEmail = async (userData) => {
  try {
    smtpMailData.sender = sender;

    smtpMailData.to = [
      {
        email: userData.email,
        name: userData.fullname,
      },
    ];

    smtpMailData.subject = "You are on the waitlist!";

    smtpMailData.params = {
      name: userData.fullname,
      twitter: "@makeuseof",
    };

    smtpMailData.htmlContent =
      "<html><body><p>Hello {{ params.name }}, " +
      "welcome to makeuseof.com waitlist. We'll notify you " +
      "when we launch. Kindly follow us on Twitter " +
      "{{ params.twitter }}.</p></body></html>"; // send email

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


SendWaitlistEmail(testData);