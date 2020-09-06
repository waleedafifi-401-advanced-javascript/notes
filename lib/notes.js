'use strict';

function Note(obj) {
  if (obj.note) {
    this.id = Math.ceil(Math.random() * 10);
    this.payload = obj.note;
    this.action = obj.action;
  } else {
    this.action = obj.action;
    this.error = obj.error;
  }
}

Note.prototype.execute = function(obj) {
  if (obj.action === '--add' || obj.action === '-a') {
    const newobj = {
      action: obj.action,
      payload: 'This is a really cool thing that I wanted to remember for later',
      // payload: obj.note, // comment thee linee above and uncomment this line if you need the message from user input
    };
    console.log(newobj);
  } else { console.log(`You only can use --add or -a`); }
};


Note.prototype.add = function(obj) {
  if (obj.note) {
    console.log(`Your note: {id: ${this.id}, note: ${obj.note}}`);
  } else {
    console.log(`Note can not be empty ^_^`);
  }
};

module.exports = Note;