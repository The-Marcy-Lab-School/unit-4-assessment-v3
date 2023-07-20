const { getId } = require('./utils');

class ToDoItem {
  constructor(ToDoListClass /* ?WHAT?ELSE? */) {
    this.id = getId();

    this.ToDoListClass = ToDoListClass;
  }
}

module.exports = ToDoItem;
