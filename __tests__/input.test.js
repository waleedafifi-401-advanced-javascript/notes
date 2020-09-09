'use strict';

const minimist = require('minimist');

jest.mock('minimist');

const Input = require('../lib/input');

describe('Input Module', () => {
  it('addNote() if the note type is String', () => {
    const inputObj = new Input();
    expect(inputObj.addNote('valid note')).toEqual('valid note');
    expect(inputObj.addNote(545454)).toEqual('ERROR: this is not valid note !!');
  });

  it('category() if return false', () => {
    const inputObj = new Input();
    let category = 'testCate';
    expect(inputObj.category(category)).toEqual(category);
    expect(inputObj.category()).toEqual('Error: please Add a category');
  });

  it('list() if return false', () => {
    const inputObj = new Input();
    expect(inputObj.list()).toBeFalsy();
  });

  it('delete() if return false ', () => {
    const inputObj = new Input();
    expect(inputObj.delete()).toBeFalsy();
  });
  
  it('update() if return false', () => {
    const inputObj = new Input();
    expect(inputObj.update()).toBeFalsy();
  });
  
  it('if input add is vaalid and it has a nootees', () => {
    const inputObj = new Input();
    inputObj.action = '--add';
    inputObj.note = 'hello';
    expect(inputObj.valid()).toBeTruthy();
  });
  
  it('if it return falsy and actioon not working', () => {
    const inputObj = new Input();
    expect(inputObj.valid()).toBeFalsy();
  });

});