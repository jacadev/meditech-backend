const { Sequelize } = require("sequelize");
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const models = require("./models");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false, native: false }
);

for (const model in models) models[model](sequelize);
for (key in sequelize.models) {
  sequelize.models[key.charAt(0).toUpperCase() + key.slice(1)] =
    sequelize.models[key];
  delete sequelize.models[key];
}

const { Doctor, Patient, Specialty, Doctor_specialty, Review } = sequelize.models;

Doctor.belongsToMany(Specialty, { through: Doctor_specialty });
Specialty.belongsToMany(Doctor, { through: Doctor_specialty });
Patient.hasMany(Review, { foreignKey: 'patient_id' });

module.exports = { ...sequelize.models, sequelize };