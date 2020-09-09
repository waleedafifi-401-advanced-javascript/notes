'use strict';

const minimist = require('minimist');
minimist.mockImplementationOnce(() => ({ add: '133313331333' }));

jest.mock('minimist');

const Input = require('../lib/input');

jest.spyOn(global.console, 'log');
jest.spyOn(global.console, 'error');


describe('Input Module', () => {
  it('addNote() the validation if the note type is String', () => {
    const inputObj = new Input();
    expect(inputObj.addNote('valid note')).toEqual('valid note');
    expect(inputObj.addNote(545454)).toEqual('ERROR: this is not valid note !!');
  });

  it('list() the validation  if  return false', () => {
    const inputObj = new Input();
    expect(inputObj.list()).toBeFalsy();
  });

  it('delete() the validation if  return false ', () => {
    const inputObj = new Input();
    expect(inputObj.delete()).toBeFalsy();
  });

  it('delete() the validation if  return false ', () => {
    minimist.mockImplementationOnce(() => ({ delete: '133313331333' }));
    const inputObj = new Input();
    inputObj.action = '-d';
    inputObj.id = '133313331333';
    expect(inputObj.delete()).toEqual('133313331333');
  });

  it('category() the validation if  returne false', () => {
    const inputObj = new Input();
    expect(inputObj.category('cat')).toEqual('cat');
    inputObj.category('');
    expect(console.log).toHaveBeenCalled();
  });

  it('If the command (add) and data (the note) were both valid', () => {
    const inputObj = new Input();
    inputObj.action = '--add';
    inputObj.note = 'hello';
    expect(inputObj.valid()).toBeTruthy();
  });

  it('If the command (add) and data (the note) were both invalid', () => {
    const inputObj = new Input();
    expect(inputObj.valid()).toBeFalsy();
  });

});
