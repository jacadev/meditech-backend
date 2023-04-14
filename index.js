const app = require("./src/app");
const port = 3001;
const {preloadSpecialtiesHelper} = require("./src/helpers")
const { sequelize, Specialty } = require("./src/db");

app.listen(port, async () => {

  sequelize.sync({ force: true }).then( async () => {
    await Specialty.bulkCreate(preloadSpecialtiesHelper)
  });

  console.log(`App listening on port ${port}`);

  console.log("Types specialties pre-loaded")
});