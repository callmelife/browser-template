'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');
const app = require('../app');



const onGetPicture = function (event) {
  event.preventDefault();
  let firstItem = app.items.shift()
  ui.getPictureSuccess(firstItem);
  app.items.push(firstItem);

};

const onUploadPicture = function (event) {
  event.preventDefault();
  api.uploadPicture()
  .done(ui.uploadPictureSuccess)
  .failure(ui.failure);
};

const addHandlers = () => {
  api.getPicture().then(data => app.items = data)
  $('#get-picture-form').on('submit', onGetPicture);
  $('.upload-picture-btn').on('submit', onUploadPicture);

};
//
// $(() => {
//   $('#my-form').on('submit', function (e) {
//     let data = getFormFields(this);
//     e.preventDefault();
//     api.myRequest(data, ui.success, ui.failure);
//   });
// });

module.exports = {
  addHandlers,
};
