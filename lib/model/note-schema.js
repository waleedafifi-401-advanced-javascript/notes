'use strict';

const mongoose = require('mongoose');

const notes = mongoose.Schema({
  note: { type: String, rquired: true},
  category: { type: String, uppercase: true, rquired: true },
});

module.exports = mongoose.model('notes', notes);