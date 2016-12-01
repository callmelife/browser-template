'use strict';

const app = require('../app.js');

const signInSuccess = (data) => {
  app.user = data.user;
};

const signOutSuccess = () => {
  app.user = null;

};

const changePasswordSuccess = () => {
};

const success = (data) => {
  $('#sign-in').show();
};

const fail = (error) => {
  console.error(error);
};

module.exports = {
  fail,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
};
