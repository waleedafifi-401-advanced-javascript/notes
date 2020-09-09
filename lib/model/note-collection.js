'use strict';

const mongoose = require('mongoose');

const schema = require('./note-schema');

class Note {
  constructor() { }

  async get(category) {
    if (category) {
      return await schema.find({ category: category });
    } else {
      return await schema.find();
    }
  }

  async create(record) {
    let newRecod = new schema(record);
    return await newRecod.save();
  }

  async update(_id, record) {
    console.log(record);
    return await schema.findByIdAndUpdate(_id, { note: record });
  }
  
  async delete(_id) {
    return await schema.deleteOne({ _id }, function(err) {
      if (!err) {
        console.log(`Record ${_id} has beed deleted`);
      } else {
        console.log('Id note found');
      }
    });
  }
}

module.exports = new Note();