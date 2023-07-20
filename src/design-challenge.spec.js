const path = require('path');
const ScoreCounter = require('score-tests');
const ToDoList = require('./ToDoList');
const ToDoItem = require('./ToDoItem');

const testSuiteName = 'Design Challenge Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {
  it('ToDoList - Creates the minimum required instance properties', () => {
    const myList = new ToDoList(ToDoItem, "This week's tasks");

    expect(myList).toBeInstanceOf(ToDoList);
    expect(myList).toHaveProperty('id');
    expect(myList.name).toBe("This week's tasks");

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('ToDoList - Has the minimum required instance methods', () => {
    expect(ToDoList.prototype.getItems).toEqual(expect.any(Function));
    expect(ToDoList.prototype.createItem).toEqual(expect.any(Function));

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('ToDoList - Has the minimum required class methods', () => {
    expect(ToDoList.list).toEqual(expect.any(Function));
    expect(ToDoList.findBy).toEqual(expect.any(Function));

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('ToDoItem - Creates the minimum required instance properties', () => {
    const myList = new ToDoList(ToDoItem, "This week's tasks");
    const description = 'Do the dishes';
    const priorityLevel = 10;
    const myItem = new ToDoItem(ToDoList, myList.id, description, priorityLevel);

    expect(myItem).toBeInstanceOf(ToDoItem);
    expect(myItem).toHaveProperty('id');
    expect(myItem.toDoListId).toBe(myList.id);
    expect(myItem.description).toBe(description);
    expect(myItem.priorityLevel).toBe(priorityLevel);
    expect(myItem.isDone).toBe(false);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('ToDoItem - Has the minimum required instance methods', () => {
    expect(ToDoItem.prototype.getToDoList).toEqual(expect.any(Function));

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('ToDoItem - Has the minimum required class methods', () => {
    expect(ToDoItem.list).toEqual(expect.any(Function));
    expect(ToDoItem.findBy).toEqual(expect.any(Function));

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('ToDoList - list(): Can list all instances of the class', () => {
    const chores = new ToDoList(ToDoItem, "This week's tasks");
    const groceries = new ToDoList(ToDoItem, "This week's groceries");
    const homework = new ToDoList(ToDoItem, "This week's homework");

    expect(ToDoList.list()).toContain(chores);
    expect(ToDoList.list()).toContain(groceries);
    expect(ToDoList.list()).toContain(homework);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('ToDoList - list(): the list returned is a shallow copy of the internal state', () => {
    const chores = new ToDoList(ToDoItem, "This week's tasks");
    const groceries = new ToDoList(ToDoItem, "This week's groceries");

    const allLists = ToDoList.list();
    allLists.length = 0;

    expect(ToDoList.list().length).toBeGreaterThan(0);
    expect(ToDoList.list()).toContain(chores);
    expect(ToDoList.list()).toContain(groceries);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('ToDoList - findBy(): Can find an instance of itself by id', () => {
    const chores = new ToDoList(ToDoItem, "This week's tasks");
    const groceries = new ToDoList(ToDoItem, "This week's groceries");
    const homework = new ToDoList(ToDoItem, "This week's homework");

    expect(ToDoList.findBy(chores.id)).toBe(chores);
    expect(ToDoList.findBy(groceries.id)).toBe(groceries);
    expect(ToDoList.findBy(homework.id)).toBe(homework);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('ToDoList - getItems(): Can find all items that belong to it', () => {
    const chores = new ToDoList(ToDoItem, 'Chores');
    const doDishes = new ToDoItem(ToDoList, chores.id, 'Do the dishes', 1);
    const doLaundry = new ToDoItem(ToDoList, chores.id, 'Do the laundry', 10);
    const getGroceries = new ToDoItem(ToDoList, chores.id, 'Do the groceries', 5);

    expect(chores.getItems()).toEqual([doDishes, doLaundry, getGroceries]);

    const funTasks = new ToDoList(ToDoItem, 'Fun weekend tasks');
    const goHiking = new ToDoItem(ToDoList, funTasks.id, 'Go hiking', 8);
    const goSwimming = new ToDoItem(ToDoList, funTasks.id, 'Go swimming', 3);

    expect(funTasks.getItems()).toEqual([goHiking, goSwimming]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('ToDoList - createItem(): Can create a ToDoItem that belongs to it', () => {
    const chores = new ToDoList(ToDoItem, "This week's tasks");
    const doDishes = chores.createItem('Do the dishes', 1);
    expect(doDishes).toBeInstanceOf(ToDoItem);
    expect(doDishes.toDoListId).toBe(chores.id);

    const finishHW = chores.createItem('Finish homework', 10);
    expect(finishHW).toBeInstanceOf(ToDoItem);
    expect(finishHW.toDoListId).toBe(chores.id);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('ToDoItem - list(): Can list all instances of the class', () => {
    const chores = new ToDoList(ToDoItem, "This week's tasks");
    const doDishes = new ToDoItem(ToDoList, chores.id, 'Do the dishes', 1);
    const doLaundry = new ToDoItem(ToDoList, chores.id, 'Do the laundry', 10);
    const getGroceries = new ToDoItem(ToDoList, chores.id, 'Do the groceries', 5);

    expect(ToDoItem.list()).toContain(doDishes);
    expect(ToDoItem.list()).toContain(doLaundry);
    expect(ToDoItem.list()).toContain(getGroceries);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('ToDoItem - list(): the list returned is a shallow copy of the internal state', () => {
    const chores = new ToDoList(ToDoItem, "This week's tasks");
    const doDishes = new ToDoItem(ToDoList, chores.id, 'Do the dishes', 1);
    const feedCat = new ToDoItem(ToDoList, chores.id, 'Feed the cat', 10);

    const allItems = ToDoItem.list();
    allItems.length = 0;

    expect(ToDoItem.list().length).toBeGreaterThan(0);
    expect(ToDoItem.list()).toContain(doDishes);
    expect(ToDoItem.list()).toContain(feedCat);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('ToDoItem - findBy(): Can find an instance of itself by id', () => {
    const chores = new ToDoList(ToDoItem, "This week's tasks");
    const cleanRoom = new ToDoItem(ToDoList, chores.id, 'Clean your room', 3);
    const pickUpMedications = new ToDoItem(ToDoList, chores.id, 'Pick up medications', 7);

    expect(ToDoItem.findBy(cleanRoom.id)).toBe(cleanRoom);
    expect(ToDoItem.findBy(pickUpMedications.id)).toBe(pickUpMedications);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('ToDoItem - getToDoList(): Can find the ToDoList that it belongs to', () => {
    const chores = new ToDoList(ToDoItem, 'Chores');
    const getCarWash = new ToDoItem(ToDoList, chores.id, 'Get car washed', 4);

    expect(getCarWash.getToDoList()).toBe(chores);

    const workList = new ToDoList(ToDoItem, 'Important work tasks');
    const doReports = new ToDoItem(ToDoList, workList.id, 'Do reports', 7);

    expect(doReports.getToDoList()).toBe(workList);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('ToDoItem - Has at *least* one extra instance property', () => {
    const chores = new ToDoList(ToDoItem, 'Chores');
    const doDishes = new ToDoItem(ToDoList, chores.id, 'Do the dishes', 1);

    const minimumProperties = [
      'id', 'toDoListId', 'description',
      'priorityLevel', 'isDone', 'ToDoListClass',
    ];
    const actualPropertyCount = Object.keys(doDishes).length;
    expect(actualPropertyCount).toBeGreaterThan(minimumProperties.length);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('ToDoItem - Has at *least* one extra instance method', () => {
    const minimumMethods = ['constructor', 'getToDoList'];
    const actualMethodCount = Object.getOwnPropertyNames(ToDoItem.prototype).length;
    expect(actualMethodCount).toBeGreaterThan(minimumMethods.length);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('ToDoList - Has at *least* one extra instance property', () => {
    const chores = new ToDoList(ToDoItem, 'Chores');

    const minimumProperties = ['id', 'name', 'ToDoItemClass'];
    const actualPropertyCount = Object.keys(chores).length;
    expect(actualPropertyCount).toBeGreaterThan(minimumProperties.length);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('ToDoList - Has at *least* one extra instance method', () => {
    const minimumMethods = ['constructor', 'createItem', 'getItems'];
    const actualMethodCount = Object.getOwnPropertyNames(ToDoList.prototype).length;
    expect(actualMethodCount).toBeGreaterThan(minimumMethods.length);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
