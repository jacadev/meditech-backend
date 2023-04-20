const { updateDayByIdController } = require("../../controllers");

const updateDayByIdHandler = async (req, res) => {
    const { day_id } = req.params;
    const { day, status } = req.body;

    try {
        const result = await updateDayByIdController(day_id, day, status);
        res.status(201).json(result);
        // return res.status(201).send('Día actualizado con éxito');
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = updateDayByIdHandler;