'use strict';

const Note = require('../lib/notes');

jest.spyOn(global.console, 'log');

const obj = {
  note: 'Cat Nooote',
  id: '0599950093',
  category: 'CAT',
  action: '--add',
  updatedNote: 'update note',
};
describe('Note Module', () => {
  it('execute() does its work', () => {
    const objOFNote = new Note({
      note: 'yes',
      action: '-a',
    });
    objOFNote.execute({
      note: 'yes',
      action: '-a',
    });
    expect(console.log).toHaveBeenCalled();
  });

  it('add() does its work', () => {
    const objOFNote = new Note(obj);
    objOFNote.add(obj);
    expect(console.log).toHaveBeenCalled();
  });
  it('add() does not  work', () => {

    const objOFNote = new Note(obj);
    objOFNote.add(obj);
    expect(console.log).toHaveBeenCalled();
  });

  it('add() does its work', () => {
    const obj = {
      note: 'valid noye',
      id: '0599950093',
      category: 'CAT',
    };
    const objOFNote = new Note(obj);
    objOFNote.add(obj);
    expect(console.log).toHaveBeenCalled();
  });
  
  it('render() does it work', () => {
    const addObj = new Note(obj);
    addObj.render(obj);
    expect(console.log).toHaveBeenCalled();
  });
  
  it('render() does it work', () => {
    const obj = {
      id: '0599950093',
      updatedNote: 'new note',
    };
    const addObj = new Note(obj);
    addObj.render(obj);
    expect(console.log).toHaveBeenCalled();
  });
  
  it('list() does it work if have a category', () => {
    const addObj = new Note(obj);
    addObj.list(obj);
    expect(console.log).toHaveBeenCalled();
  });
  
  it('list() does its work if it does not have a category', () => {
    const obj = {
      note: 'valid noye',
      id: '0599950093',
      updatedNote: 'new note',
    };

    const objOFNote = new Note(obj);
    objOFNote.list(obj);
    expect(console.log).toHaveBeenCalled();
  });

  it('delete() does it is work', () => {
    const objOFNote = new Note(obj);
    objOFNote.delete(obj);
    expect(console.log).toHaveBeenCalled();
  });
  
  it('update() does it is work', () => {
    const objOFNote = new Note(obj);
    objOFNote.update(obj);
    expect(console.log).toHaveBeenCalled();
  });

});