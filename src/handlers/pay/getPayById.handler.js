const { getPayByIdController } = require("../../controllers");

const getPayByIdHandler = async(req, res) => {
    const { pay_id } = req.params;
    try {
        const payById = await getPayByIdController(pay_id);
        return res.status(200).json(payById);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = getPayByIdHandler;