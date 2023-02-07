'use strict';

var utils = require('../utils/writer.js');
var JobApplications = require('../service/JobApplicationsService');

module.exports.createJobApplication = function createJobApplication (req, res, next, body, id) {
  JobApplications.createJobApplication(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getApplicationsByJob = function getApplicationsByJob (req, res, next, id) {
  JobApplications.getApplicationsByJob(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getApplicationsForUser = function getApplicationsForUser (req, res, next, id) {
  JobApplications.getApplicationsForUser(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifyJobApplication = function modifyJobApplication (req, res, next, body, id) {
  JobApplications.modifyJobApplication(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
