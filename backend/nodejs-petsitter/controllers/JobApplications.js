'use strict';

var utils = require('../utils/writer.js');
var JobApplications = require('../service/JobApplicationsService');

module.exports.job_applicationsIdPUT = function job_applicationsIdPUT (req, res, next, body, id) {
  JobApplications.job_applicationsIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.jobsIdJob_applicationsGET = function jobsIdJob_applicationsGET (req, res, next, id) {
  JobApplications.jobsIdJob_applicationsGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.jobsIdJob_applicationsPOST = function jobsIdJob_applicationsPOST (req, res, next, body, id) {
  JobApplications.jobsIdJob_applicationsPOST(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersIdJob_applicatiionsGET = function usersIdJob_applicatiionsGET (req, res, next, id) {
  JobApplications.usersIdJob_applicatiionsGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
