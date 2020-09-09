'use strict';

require('@code-fellows/supergoose');
const Note = require('../lib/notes');

jest.spyOn(global.console, 'log');

describe('Note Module', () => {

  it('add() should save the note to database', () => {
    let obj = { note: 'note', category: 'TEEST' };
    const notes = new Note(obj);
    return notes.add()
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('rendre() the note from database', () => {
    let obj = { note: 'note', category: 'TEEST' };
    const notes = new Note(obj);
    return notes.rendre()
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('list() all note from database', () => {
    let obj = { note: 'note', category: 'TEEST' };
    const notes = new Note(obj);
    return notes.list()
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  // it('execute() does its work', () => {
  //   const objOFNote = new Note({ payload: 'yes', action: '--a' });
  //   objOFNote.execute({ payload: 'yes', action: '--a' });
  //   expect(console.log).toHaveBeenCalled();
  // });

  // it('add() does its work', () => {
  //   const objOFNote = new Note({ action: '--a', error: 'ERROR: this is not valid arg' });
  //   objOFNote.add({ action: '--a', error: 'ERROR: this is not valid arg' });
  //   expect(console.log).toHaveBeenCalled();
  // });

  // it('add() does its work', () => {
  //   const objOFNote = new Note({ payload: 'yes', action: '--a', note: 'valid note' });
  //   objOFNote.add({ payload: 'yes', action: '--a', note: 'valid note' });
  //   expect(console.log).toHaveBeenCalled();
  // });

});