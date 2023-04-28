const nodemailer = require("nodemailer");

const sendMail = async (userData, template) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp-relay.sendinblue.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "jesus@etereoworks.com", // generated ethereal user
        pass: "8dxgbp0KIPJNQTCq", // generated ethereal password
      },
    });

    let templateToSend = template(userData);

    let info = await transporter.sendMail({
      from: '"Meditech" <notificaciones@meditech-app.com>', // sender address
      to: userData.email, // list of receivers
      subject: userData.subject, // Subject line
      params: userData,
      html: templateToSend, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  } catch (error) {
    console.log("An error occured...");
    console.error(error);
    throw new Error(error); // handle errors
  }
};

module.exports = sendMail;
