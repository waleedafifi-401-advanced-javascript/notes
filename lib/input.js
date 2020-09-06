'use strict';
const minimist = require('minimist');

function input() {
  console.log(process.argv);
  let checkMethod = process.argv[2];
  let argv = minimist(process.argv.slice(2));

  console.log(Object.keys(argv));
  let method = Object.keys(argv)[1];
  let text = argv[method];
  let reg = /^add$|^a$/ig;

  if(reg.test(method) && (checkMethod === '--add' || checkMethod === '-a')){
    if(text.length > 0){
      this.action = method;
      this.payload = text;
    }else{
      console.log('Note can not be empty ^_^');
    }
  }else {
    console.log('You can only use [--add, -a] to add a note.');
  }
}

module.exports = input;