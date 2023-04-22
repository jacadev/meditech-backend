const { getDisponibiltyByIdController } = require("../../controllers");

const getDisponibiltyByIdHandler = async (req, res) => {
    const { disponibilty_id } = req.params;
    try {
        const disponibiltyById = await getDisponibiltyByIdController(disponibilty_id);
        return res.status(200).json(disponibiltyById);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = getDisponibiltyByIdHandler;