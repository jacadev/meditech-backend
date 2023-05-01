const app = require("./src/app");
const port = 3001;
const {
  preloadSpecialtiesHelper,
  preloadRolesHelper,
  preloadDoctorsHelper,
  preloadPersonsHelper,
  preloadReviewsHelper,
  preloadDaysHelper,
  preloadTimetablesHelper,
  preloadDisponibiltiesHelper,
  preloadAppointmentsHelper,
  preloadPaysHelper,
} = require("./src/helpers");
const { sequelize, Specialty, Rol, Day, Timetable } = require("./src/db");
const axios = require("axios");

app.listen(port, async () => {
  sequelize.sync({ force: true }).then(async () => {
    await Specialty.bulkCreate(preloadSpecialtiesHelper);
    await Rol.bulkCreate(preloadRolesHelper);
    await Day.bulkCreate(preloadDaysHelper);
    await Timetable.bulkCreate(preloadTimetablesHelper);

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
      );
    }

    for (let i = 0; i < preloadDisponibiltiesHelper.length; i++) {
      await axios.post(
        "http://localhost:3001/disponibilties",
        preloadDisponibiltiesHelper[i]
      );
    }

    for (let i = 0; i < preloadAppointmentsHelper.length; i++) {
      await axios.post(
        "http://localhost:3001/appointments",
        preloadAppointmentsHelper[i]
      );
    }

    // preload Pays
    for (let i = 0; i < preloadPaysHelper.length; i++) {
      await axios.post(
        "http://localhost:3001/pays",
        preloadPaysHelper[i]
      );
    }
  });
  console.log(`App listening on port ${port}`);
  console.log("Ready pre-loades");
});
