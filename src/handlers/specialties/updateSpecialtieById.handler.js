const { updateSpecialtieByIdController } = require("../../controllers");

const updateSpecialtieByIdHandler = async (req, res) => {
    const { specialty_id } = req.params;
    const { specialty, status } = req.body;

    try {
        const result = await updateSpecialtieByIdController(specialty_id, specialty, status);
        res.status(201).json(result);
        // return res.status(201).send('Especialidad actualizada con éxito');
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = updateSpecialtieByIdHandler;