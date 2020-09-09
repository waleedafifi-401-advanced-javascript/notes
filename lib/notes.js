'use strict';

const Notes = require('./model/note-schema');

class Note {
  constructor(addObj) {
    console.log(addObj.note);
    if (addObj.note) {
      this.id = Math.ceil(Math.random() * 10);
      this.note = addObj.note;
      this.action = addObj.action;
      this.category = addObj.category;
    } else {
      this.action = addObj.action;
      this.error = addObj.error;
    }
  }
  execute(addObj) {
    if (addObj) {
      const newobj = {
        action: addObj.action,
        note: 'notes are a good way to remember things',
      };
      console.log(newobj);
    }
  }

  // add(addObj) {
  //   if (addObj.note) {
  //     console.log(`Adding Note: ${addObj.note}`);
  //   } else {
  //     console.log(`${this.error}`);
  //   }
  // }

  async add(addObj) {
    if (addObj.note && addObj.action) {
      let record = new Notes(addObj);
      let save = await record.save();
      console.log(`note saved`, addObj.note);
      return save;
    } else {
      console.log(`Error: ${this.error}`);
    }
  }
  render(addObj) {
    if (addObj.note) {
      console.log(`Adding Note: ${addObj.note}`);
    } else {
      console.log(` ${this.error}`);
    }
  }

  async list(addObj) {
    if (addObj.category) {
      let cate = addObj.category.toUpperCase();
      if (typeof cate === 'string') {
        let allNotes = await Notes.find({ category: addObj.category });
        console.log(addObj.category ,':', allNotes);
        return allNotes;
      }
    } else {
      let allNotes = await Notes.find({});
      allNotes.map((ele) => {
        console.log(`
      ${ele.note}
      Category: ${ele.category}  ID: ${ele._id}
      --------------------------------------------------
      `);
      });
      return allNotes;
    }
  }

  async delete(addObj) {
    await Notes.findByIdAndDelete(addObj.id, function(err, doc) {
      if (doc) {
        console.log(`Deleted Note ${doc._id}`);
        return doc;
      } else {
        console.log('Id does not exsists.');
      }
    });
  }
}

module.exports = Note;