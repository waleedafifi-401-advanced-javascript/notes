'use strict';

const minimist = require('minimist');

function Input() {

  const args = minimist(process.argv.slice(2));
  const argMethod = process.argv.slice(2)[0];

  if (argMethod === '--add' || argMethod === '-a') {
    this.action = argMethod;
    this.note = this.add(args.a || args.add);
  } else {
    console.log(argMethod);
    this.action = argMethod;
    this.error = 'ERROR: this is not valid arg';
  }
}

Input.prototype.add = function(note = '') {
  if (typeof note === 'string') {
    return note;
  } else {
    return note = false;
  }
};

module.exports = Input;