'use strict';


/**
 * Delete User
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.deleteUserById = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * View User
 *
 * id Integer 
 * returns User
 **/
exports.getUserById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "full_name" : "full_name",
  "roles" : [ "roles", "roles" ],
  "id" : 0,
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modify User
 *
 * body User  (optional)
 * id Integer 
 * returns User
 **/
exports.modifyUserById = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "full_name" : "full_name",
  "roles" : [ "roles", "roles" ],
  "id" : 0,
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Register a user
 *
 * body User  (optional)
 * no response value expected for this operation
 **/
exports.registerUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

