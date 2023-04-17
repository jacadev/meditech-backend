const { postSpecialtieController } = require("../../controllers");

const postSpecialtieHandler = async (req, res) => {
    const { specialty } = req.body;
    try {
        const newSpecialty = await postSpecialtieController(specialty);

        return res.status(201).json(newSpecialty);
        // return res.status(201).send('Especialidad creada con éxito');
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
};

module.exports = postSpecialtieHandler;