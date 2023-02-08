'use strict';


/**
 * Create a job
 *
 * body Job  (optional)
 * no response value expected for this operation
 **/
exports.createJob = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete Job
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.deleteJobById = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List all jobs
 *
 * returns inline_response_200
 **/
exports.getAllJobs = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "creator_user_id" : 6,
    "start_time" : "start_time",
    "activity" : "activity",
    "id" : 0,
    "Pet" : {
      "size" : "size",
      "pet_type" : "pet_type",
      "name" : "name",
      "age" : 1,
      "breed" : "breed"
    }
  }, {
    "creator_user_id" : 6,
    "start_time" : "start_time",
    "activity" : "activity",
    "id" : 0,
    "Pet" : {
      "size" : "size",
      "pet_type" : "pet_type",
      "name" : "name",
      "age" : 1,
      "breed" : "breed"
    }
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
 * View Job
 *
 * id Integer 
 * returns Job
 **/
exports.getJobById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "creator_user_id" : 6,
  "start_time" : "start_time",
  "activity" : "activity",
  "id" : 0,
  "Pet" : {
    "size" : "size",
    "pet_type" : "pet_type",
    "name" : "name",
    "age" : 1,
    "breed" : "breed"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List jobs for User
 *
 * id Integer 
 * returns inline_response_200
 **/
exports.getJobsForUser = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "creator_user_id" : 6,
    "start_time" : "start_time",
    "activity" : "activity",
    "id" : 0,
    "Pet" : {
      "size" : "size",
      "pet_type" : "pet_type",
      "name" : "name",
      "age" : 1,
      "breed" : "breed"
    }
  }, {
    "creator_user_id" : 6,
    "start_time" : "start_time",
    "activity" : "activity",
    "id" : 0,
    "Pet" : {
      "size" : "size",
      "pet_type" : "pet_type",
      "name" : "name",
      "age" : 1,
      "breed" : "breed"
    }
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
 * Modify Job
 *
 * body Job  (optional)
 * id Integer 
 * returns Job
 **/
exports.jobsIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "creator_user_id" : 6,
  "start_time" : "start_time",
  "activity" : "activity",
  "id" : 0,
  "Pet" : {
    "size" : "size",
    "pet_type" : "pet_type",
    "name" : "name",
    "age" : 1,
    "breed" : "breed"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

