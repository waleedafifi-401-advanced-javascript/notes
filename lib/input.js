'use strict';

const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    const argMethod = process.argv.slice(2)[0];

    if (argMethod === '--add' || argMethod === '-a') {
      this.action = argMethod;
      this.note = this.addNote(args.a || args.add);
      this.category = this.category(args.category).toUpperCase();
    } else if (argMethod === '--delete' || argMethod === '-d') {
      const noteId = process.argv.slice(2)[1];
      this.action = argMethod;
      this.id = noteId;
    } else if (argMethod === '--list' || argMethod === '-l') {
      const noteCategory = process.argv.slice(2)[1];
      this.action = argMethod;
      this.category = noteCategory;
    } else if (argMethod === '--update' || argMethod === '--u') {
      let id = process.argv.slice(2)[1];
      let updatedNote = process.argv.slice(2)[2];
      this.id = id;
      this.updatedNote = updatedNote;
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

  category(category = '') {
    if (category === '') {
      return 'Error: please Add a category';
    }
    console.log('category=', category);
    return category;
  }

  list() {
    const argMethod = process.argv.slice(2)[0];
    return argMethod === '--list' || argMethod === '-l';
  }

  delete() {
    const argMethod = this.action;
    const noteId = this.id;
    if (argMethod === '--delete' || argMethod === '-d' && noteId) {
      return noteId;
    } else {
      console.log('you have to  write an id');
    }
  }

  update() {
    const argMethod = process.argv.slice(2)[0];
    if (argMethod === '--update' || argMethod === '-u') {
      return true;
    } else {
      return false;
    }
  }

  valid() {
    return !!(this.action && this.note);
  }
}

module.exports = Input;
