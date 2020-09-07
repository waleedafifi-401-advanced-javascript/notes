'use strict';

const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    const argMethod = process.argv.slice(2)[0];

    if (argMethod === '--add' || argMethod === '-a') {
      this.action = argMethod;
      this.note = this.addNote(args.a || args.add);

    } else {
      this.action = argMethod;
      this.error = 'ERROR: this is not valid arg';
    }
  }

  addNote(note = '') {
    if (typeof note === 'string') {
      return note;
    } else {
      return note = 'ERROR: this is not valid note !!';
    }
  }

  valid() {
    return !!(this.action && this.note);
  }
}

module.exports = Input;
