
'use strict';

require('@code-fellows/supergoose');
const note = require('../lib/model/note-collection');
jest.spyOn(global.console, 'log');

let noteObject = {
  note: 'Don\'t foorget to feed your cat',
  category: 'CAT',
};

describe('note Model', () => {
  it('create() if it save the note', () => {
    return note.create(noteObject)
      .then(record => {
        Object.keys(noteObject).forEach(key => {
          expect(record[key]).toEqual(noteObject[key]);
        });
      });
  });

  it('get() find all the note in a specific category if a category insert', () => {
    return note.create(noteObject)
      .then(record => {
        return note.get(record.category)
          .then(getNote => {
            Object.keys(noteObject).forEach(key => {
              expect(getNote[0][key]).toEqual(noteObject[key]);
            });
          });
      });
  });

  it('get() find all the note if there is no category insert', () => {
    return note.create(noteObject)
      .then(record => {
        return note.get()
          .then(getNote => {
            Object.keys(noteObject).forEach(key => {
              expect(getNote[0][key]).toEqual(noteObject[key]);
            });
          });
      });
  });

  it('update() will update a saved note ', () => {
    return note.create(noteObject)
      .then(record => {
        let updatednote = {
          note: 'Im Updated note',
          category: 'TEST',
          _id: record._id,
        };
        return note.update(updatednote._id, updatednote.note)
          .then(updateNote => {
            return note.get(updateNote.category)
              .then(getNote => {
                Object.keys(noteObject).forEach(key => {
                  expect(getNote[0][key]).toEqual(noteObject[key]);
                });
              });
          });
      });
  });

  it('delete() will delete a note by its id', () => {
    return note.create(noteObject)
      .then(record => {
        let updatedNote = {
          note: 'I am a note ^_^',
          category: 'TEST',
          _id: record._id,
        };
        return note.delete(updatedNote._id).then(() => {
          expect(console.log).toHaveBeenCalled();
        });
      });
  });

});
