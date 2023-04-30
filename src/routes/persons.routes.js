const { Router } = require("express");
const personsRouter = Router();
const {
    getPersonByNameHandler
} = require("../handlers");

personsRouter.get('/name', getPersonByNameHandler);

module.exports = personsRouter;