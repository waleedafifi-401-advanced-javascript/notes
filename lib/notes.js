'use strict';

const note = require('./model/note-collection');

class Note {
  constructor(addObj) {
    if (addObj.note) {
      this.id = addObj.id;
      this.note = addObj.note;
      this.action = addObj.action;
      this.category = addObj.category;
      this.updateNote = addObj.updatedNote;
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

  async add(addObj) {
    if (this.note && this.action) {
      console.log(`note saved`, addObj.note);
      return await note.create(addObj);
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
      let allNotes = await note.get(cate);
      console.log(addObj.category ,':', allNotes);
      return allNotes;
    } else {
      let allNotes = await note.get();
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
    await note.delete(addObj.id, function(err) {});
    console.log(`Deleted Note ${addObj.id}`);
  }
  
  async update(addObj) {
    console.log(addObj);
    await note.update(addObj.id, addObj.updatedNote);
    console.log('The note has been updated');
  }
}

module.exports = Note;