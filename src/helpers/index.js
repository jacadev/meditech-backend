const arrayCleanerHelper = require('./arrayCleaner.helper');
const filterBySpecialtyHelper = require('./filterBySpecialty.helper');
const objTemplateHelper = require('./objTemplate.helper');
const orderByNameHelper = require('./orderByName.helper');
const orderByRatingHelper = require('./orderByRating.helper');
const paginationHelper = require('./pagination.helper');
const preloadSpecialtiesHelper = require('./preloadData/preloadSpecialties.helper');
const preloadRolesHelper = require('./preloadData/preloadRoles.helper');
const preloadReviewsHelper = require('./preloadData/preloadReviews.helper');
const preloadPersonsHelper = require('./preloadData/preloadPersons.helper');
const preloadDoctorsHelper = require('./preloadData/preloadDoctors.helper');
const preloadDaysHelper = require('./preloadData/preloadDays.helper');
const preloadTimetablesHelper = require('./preloadData/preloadTimetables.helper');
const preloadDisponibiltiesHelper = require('./preloadData/preloadDisponibilties.helper');
const preloadAppointmentsHelper = require('./preloadData/preloadAppointments.helper');
const preloadPaysHelper = require('./preloadData/preloadPays.helper');

module.exports = {
  arrayCleanerHelper,
  filterBySpecialtyHelper,
  objTemplateHelper,
  orderByNameHelper,
  orderByRatingHelper,
  paginationHelper,
  preloadSpecialtiesHelper,
  preloadRolesHelper,
  preloadDoctorsHelper,
  preloadReviewsHelper,
  preloadPersonsHelper,
  preloadDaysHelper,
  preloadTimetablesHelper,
  preloadDisponibiltiesHelper,
  preloadAppointmentsHelper,
  preloadPaysHelper,
};
