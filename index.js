const app = require("./src/app");
const port = 3001;
const {preloadSpecialtiesHelper, preloadRolsHelper} = require("./src/helpers")
const { sequelize, Specialty, Rol } = require("./src/db");

app.listen(port, async () => {

  sequelize.sync({ force: true })
  .then( async () => {
    await Specialty.bulkCreate(preloadSpecialtiesHelper);
    await Rol.bulkCreate(preloadRolsHelper);
  })

  console.log(`App listening on port ${port}`);

  console.log("Types specialties pre-loaded")
});