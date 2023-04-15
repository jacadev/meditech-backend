const app = require("./src/app");
const port = 3001;
const {
  preloadSpecialtiesHelper,
  preloadRolesHelper,
  preloadDoctorsHelper,
} = require("./src/helpers");
const { sequelize, Specialty, Rol } = require("./src/db");
const axios = require("axios");

app.listen(port, async () => {
  sequelize.sync({ force: true }).then(async () => {
    await Specialty.bulkCreate(preloadSpecialtiesHelper);
    await Rol.bulkCreate(preloadRolesHelper);    
    for (let i = 0; i < preloadDoctorsHelper.length; i++) {
      await axios.post(
        "http://localhost:3001/doctors",
        preloadDoctorsHelper[i]
      );
    }
  });
  console.log(`App listening on port ${port}`);
  console.log("Types specialties pre-loaded");
});
