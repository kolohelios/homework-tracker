'use strict';

var Mongoose = require('mongoose');

var assignmentSchema = Mongoose.Schema({
  name: {type: String, required: true},
  desc: {type: String},
  dueDate: {type: Date, required: true},
  category: {type: String, required: true},
  createdAt: {type: Date, required: true, default: Date.now},
  userId: {type: Mongoose.Schema.ObjectId, ref: 'User', required: true}
});

var Assignment = Mongoose.model('Assignment', assignmentSchema);
module.exports = Assignment;
