const { postDayController } = require("../../controllers");

const postDayHandler = async (req, res) => {
    const { day } = req.body;
    try {
        const newDay = await postDayController(day);

        return res.status(201).json(newDay);
        // return res.status(201).send('Día creado con éxito');
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
};

module.exports = postDayHandler;