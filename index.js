'use strict';

const mongoose = require('mongoose');
const Input = require('./lib/input');
const Note = require('./lib/notes');

const DB_URL = 'mongodb://localhost:27017/note';
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const inputObj = new Input();

// if (inputObj.valid()) {

//   const objOFNote = new Note(inputObj);

//   objOFNote.execute(inputObj);
//   objOFNote.add(inputObj);
// }

const objOFNote = new Note(inputObj);
if (inputObj.valid()) {
  objOFNote.execute(inputObj);
  objOFNote.add(inputObj).then(mongoose.disconnect);
} else if (inputObj.list()) {
  objOFNote.list(inputObj).then(mongoose.disconnect);
} else if (inputObj.delete()) {
  objOFNote.delete(inputObj).then(mongoose.disconnect);
} else {
  help();
}

function help() {
  console.log(`
      note usage: node index.js --<method> '<Note Value>'  --<category>  '<Category Name>'
      
      method (-a/--add)
      
      Note Value it is the not string value e.g. Waleed says hi 
      
      category (-c/--category)
      
      Category Name it is thee category of th note that will be insreted into db
  `);
  process.exit();
}
