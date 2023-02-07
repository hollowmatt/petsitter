'use strict';

var utils = require('../utils/writer.js');
var Jobs = require('../service/JobsService');

module.exports.jobsGET = function jobsGET (req, res, next) {
  Jobs.jobsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.jobsIdDELETE = function jobsIdDELETE (req, res, next, id) {
  Jobs.jobsIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.jobsIdGET = function jobsIdGET (req, res, next, id) {
  Jobs.jobsIdGET(id)
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

module.exports.jobsPOST = function jobsPOST (req, res, next, body) {
  Jobs.jobsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersIdJobsGET = function usersIdJobsGET (req, res, next, id) {
  Jobs.usersIdJobsGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
