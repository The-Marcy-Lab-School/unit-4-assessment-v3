const { getId } = require('./utils');

class ToDoList {
  constructor(ToDoItemClass /* ?WHAT?ELSE? */) {
    this.id = getId();

    this.ToDoItemClass = ToDoItemClass;
  }
}

module.exports = ToDoList;
