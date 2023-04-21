const { Pay, Appointment } = require("../../db");

const postPayController = async (appointment_id, create_time, email_address, address, given_name, surname, currency_code, amount, status ) => {

    if (status === 'COMPLETED') {
        
        const newPay = await Pay.create({
            createTime: create_time, 
            emailAddress: email_address, 
            address, 
            givenName: given_name, 
            surname, 
            currencyCode: currency_code,
            amount,
            status
        });
    
        //por el momento recibimos el appointment_id por body porque tenemos los datos precargados
        // porque en si, el pay y el appointment deberian tener el mismo id
        const appointment = await Appointment.findByPk(appointment_id);
      
    //   console.log("propiedades", appointment.__proto__);     
        await appointment.setPay(newPay.id)
        await newPay.setAppointment(appointment); //  establece la relación entre un doctor y su información personal
    
        return newPay;
    }

    throw new Error("pago rechazado");
};

module.exports = postPayController;
