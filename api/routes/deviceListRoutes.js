'use strict';
module.exports = function(app) {
  var deviceList = require('../controllers/deviceListController');

  // todoList Routes
  app.route('/devices')
    .get(deviceList.list_all_devices)
    .post(deviceList.create_a_device);


  app.route('/devices/:Id')
    .get(deviceList.read_a_device)
    .put(deviceList.update_a_device)
    .delete(deviceList.delete_a_device);
};