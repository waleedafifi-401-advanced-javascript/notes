function notes(arg){}

notes.prototype.execute = function(arg){
  if(arg.payload){
    console.log('Action and input you used: ',arg);
  }
};

notes.prototype.add = function(arg){
  if(arg.payload){
    let newNote ={
      id : Math.ceil(Math.random()*100),
      note : arg.payload,
    };
    console.log('Text you have entered: ', newNote);
  }
};

module.exports = notes;