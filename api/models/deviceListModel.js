'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DeviceSchema = new Schema({
  DeviceName: {
    type: String,
    required: 'Kindly enter the name of the device'
  },
  LogDate: {
    type: Date,
    default: Date.now
  }
  
});

module.exports = mongoose.model('Devices', DeviceSchema);