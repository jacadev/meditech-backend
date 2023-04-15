const arrayCleanerHelper = require("./arrayCleaner.helper");
const filterBySpecialtyHelper = require("./filterBySpecialty.helper");
const objTemplateHelper = require("./objTemplate.helper");
const orderByNameHelper = require("./orderByName.helper");
const orderByRatingHelper = require("./orderByRating.helper");
const paginationHelper = require("./pagination.helper");
const preloadSpecialtiesHelper = require("./preloadData/preloadSpecialties.helper");
const preloadRolesHelper = require("./preloadData/preloadRoles.helper");
const preloadReviews = require("./preloadData/preloadReviews.helper");
const preloadPersons = require("./preloadData/preloadPersons.helper");
const preloadDoctors = require("./preloadData/preloadDoctors.helper");

module.exports = {
  arrayCleanerHelper,
  filterBySpecialtyHelper,
  objTemplateHelper,
  orderByNameHelper,
  orderByRatingHelper,
  paginationHelper,
  preloadSpecialtiesHelper,
  preloadRolesHelper,
  preloadReviews,
  preloadPersons,
  preloadDoctors,
};
