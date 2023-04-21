const {postPayController} = require('../../controllers');

const postPayHandler = async (req, res) => {
    const {
        appointment_id,
        create_time, 
        email_address, 
        address, 
        given_name, 
        surname, 
        currency_code, 
        amount, 
        status 
    } = req.body;
    
    try {
      const payPosted = await postPayController(
        appointment_id,
        create_time, 
        email_address, 
        address, 
        given_name, 
        surname, 
        currency_code, 
        amount,
        status
      );
      res.status(201).json(payPosted);
    } catch (error) {
      res.status(404).send({ error: error.message });
    }
  };
  
  module.exports = postPayHandler;
  
  