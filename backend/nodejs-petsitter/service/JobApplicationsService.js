'use strict';


/**
 * Create Job Application
 *
 * body JobApplication  (optional)
 * id Integer 
 * no response value expected for this operation
 **/
exports.createJobApplication = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List Applications For Job
 *
 * id Integer 
 * returns inline_response_200_1
 **/
exports.getApplicationsByJob = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "user_id" : 6,
    "job_id" : 1,
    "id" : 0,
    "status" : "status"
  }, {
    "user_id" : 6,
    "job_id" : 1,
    "id" : 0,
    "status" : "status"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List applications for a given user
 *
 * id Integer 
 * returns Object
 **/
exports.getApplicationsForUser = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modify Job Application
 *
 * body JobApplication Update the application details (optional)
 * id Integer 
 * returns JobApplication
 **/
exports.modifyJobApplication = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "user_id" : 6,
  "job_id" : 1,
  "id" : 0,
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

