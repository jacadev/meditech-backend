const app = require("./src/app");
const port = 3001;
const {
  preloadSpecialtiesHelper,
  preloadRolesHelper,
  preloadDoctors
} = require("./src/helpers");
const { sequelize, Specialty, Rol } = require("./src/db");
const axios = require("axios");

app.listen(port, async () => {
  sequelize.sync({ force: true }).then(async () => {
    await Specialty.bulkCreate(preloadSpecialtiesHelper);
    await Rol.bulkCreate(preloadRolesHelper);

    (async function ( ) {
      preloadDoctors.map( elm => await axios.post('http://localhost:3001/doctors', preloadDoctors[0]))      
      
    }) ( );       
  });

  console.log(`App listening on port ${port}`);
  console.log("Types specialties pre-loaded");
  
});