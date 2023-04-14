const app = require("./src/app");
const port = 3001;
const specialties = require("./src/arraySpecialtiesTemplate.js")
const { sequelize, Specialty } = require("./src/db");

app.listen(port, () => {
  sequelize.sync({ force: true });
  console.log(`App listening on port ${port}`);

  specialties.forEach(async (element)=> await Specialty.create({name: element}));

  console.log("Types specialties pre-loaded")
});