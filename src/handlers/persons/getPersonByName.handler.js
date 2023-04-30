const { getPersonByNameController } = require("../../controllers");

const getPersonByNameHandler = async (req, res) => {
    const { name } = req.query;
    try {
      const personByName = await getPersonByNameController(name);
      return res.status(201).json(personByName);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
};

module.exports = getPersonByNameHandler;