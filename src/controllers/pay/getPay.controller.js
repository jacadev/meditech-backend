const { Pay } = require("../../db");

const getAllPaysController = async () => {
  const response = await Pay.findAll()

  return response;
};

module.exports = getAllPaysController;