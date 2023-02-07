'use strict';

var utils = require('../utils/writer.js');
var Jobs = require('../service/JobsService');

module.exports.createJob = function createJob (req, res, next, body) {
  Jobs.createJob(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteJobById = function deleteJobById (req, res, next, id) {
  Jobs.deleteJobById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllJobs = function getAllJobs (req, res, next) {
  Jobs.getAllJobs()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getJobById = function getJobById (req, res, next, id) {
  Jobs.getJobById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getJobsForUser = function getJobsForUser (req, res, next, id) {
  Jobs.getJobsForUser(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.jobsIdPUT = function jobsIdPUT (req, res, next, body, id) {
  Jobs.jobsIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
