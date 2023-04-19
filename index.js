const app = require("./src/app");
const port = 3001;
const {
  preloadSpecialtiesHelper,
  preloadRolesHelper,
  preloadDoctorsHelper,
  preloadPersonsHelper,
  preloadReviewsHelper
} = require("./src/helpers");
const { sequelize, Specialty, Rol, Review } = require("./src/db");
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
    // preloadPersonsHelper.forEach(element => postPatientController(element))
    for (let i = 0; i < preloadPersonsHelper.length; i++) {
      await axios.post(
        "http://localhost:3001/patients",
        preloadPersonsHelper[i]
      );
    }
    for (let i = 0; i < preloadReviewsHelper.length; i++) {
      await axios.post(
        "http://localhost:3001/reviews",
        preloadReviewsHelper[i]
      )
    }
    // await Review.bulkCreate(preloadReviewsHelper);
  });
  console.log(`App listening on port ${port}`);
  console.log("Types specialties pre-loaded");
});
