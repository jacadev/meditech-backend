const { postCitaController } = require("../../controllers");

const postCitaHandler = async (req, res) => {
    const { firstName, lastName, dni, phone, email, comment, date, hour, dataTreatment, receiveCommunication } = req.body;
    try {
        const newCita = await postCitaController(firstName, lastName, dni, phone, email, comment, date, hour, dataTreatment, receiveCommunication);

        return res.status(201).json(newCita);
        // return res.status(201).send("Cita creada con éxito");
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = postCitaHandler;