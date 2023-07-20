# Unit 4 Assessment

- [Unit 4 Assessment](#unit-4-assessment)
  - [Before you start](#before-you-start)
  - [That's a lot of tests](#thats-a-lot-of-tests)
  - [Running tests effectively](#running-tests-effectively)
  - [What resources can you use?](#what-resources-can-you-use)
- [Section 1: From Scratch](#section-1-from-scratch)
  - ["Why can't I see my logs in the test?"](#why-cant-i-see-my-logs-in-the-test)
- [Section 2: Short Answer](#section-2-short-answer)
- [Section 3: Design Challenge](#section-3-design-challenge)

> Welcome to your Unit 4 Assessment! This is a tougher assessment than last time, but you know what's also tougher? You. You can do this, because all you have to do is your best.

## Before you start

Before you are 3 sections:
- From Scratch
- Short Answers
- Design Challenge

It's recommended that before you do anything, take a deep breath and let that useless adrenaline run out of you. Seriously, do that. **Do it.**

Ok, now that you're chill(er), it's time to start thinking about the assessment. It's always recommended that you scan over the entire thing before starting to code. This will let you see where you might run into big roadblocks or have speed boosts. This will help you plan your time more effectively.

## That's a lot of tests
You're about to see more tests than you ever have before. Do not panic. Test files are often a few hundred lines due to their repetitive nature. Sure the *file* is 300 lines long, but each isolated test is only a 2-10 lines long. Just like you've seen *a million* times now.

How do you rock an assessment? One test at a time. Work small, test often, keep moving forward.

## Running tests effectively
The prompts are super lightweight because you *need* to be reading the tests. We recommend after running `npm i` for your dependencies, you do `npm run test:w`. This will activate jest's watch mode, which automatically re-runs the tests on every file save.

Remember, while in watch mode if you hit `w`, a menu of options opens. These options allow you to focus on only running certain test or certain test files.

For example hitting `p` and then typing `from-scratch` it will only run tests from a file that matches that name. You can hit `a` to go back to running all tests.

Hit `ctrl` and `c` at the same to exit watch mode.

## What resources can you use?
This is an open book assessment which means you can use your notes and Google. However, please do not talk to other fellows and do not use any AI resources. We need to see what *you* know from this assessment. Honestly the study guide might be the only thing you need, *definitely* use it.

# Section 1: From Scratch
Inside the `from-scratch.js` file you'll see 3 things:

- bankAccountFactory
- A Phone class
- An AppleIPhone class

Your mission is to get all the tests to pass. There are a *lot* of tests and they'll tell you exactly what to build. Here are some tips for reading tests to write code:

- Read the test names! Those say what the test is looking for in plain english.
- What are the function signatures? What arguments do you need and what are their types?
- Are the methods pure or do they rely on some internal state? Do they have side effects?
- Does the function console log? Return something? Both? Neither?? WHAT DOES IT DO?!
- Are your methods and properties *spelled* correctly?
- Do any classes inherit from any others?

## "Why can't I see my logs in the test?"
We are testing when `console.log` gets called. That means we're mocking it. So, `console.log` what you need to in order to pass the test; but if you want to see some extra debugging output, use `console.info` for those pieces of data.

OR! Just use the `playground.js` file to mess around, that will log everything like normal.

# Section 2: Short Answer
There are 8 questions that you need to answer. Always answer as simply, yet fully, as possible. We don't want you to lose points for being vague, but don't throw in so much extra information that you leave yourself open to mistakes.

Some questions can be answered in a sentence. Answer your questions like you were trying to explain the concept to a confused classmate. Mind your grammar and use the correct technical jargon!

# Section 3: Design Challenge
This is the *most* fun part of the assignment. You have 2 classes `ToDoList` (in `ToDoList.js`) and `ToDoItem` (in, you guessed it, `ToDoItem.js`). **Your task is to create the basic properties and methods required for the relationship to work**. The tests for these files are in `design-challenge.spec.js`. However, there's another part: **you must add your own methods and properties.**

**You must add at least 1 instance method and property to each class.** But feel free to add more! 1 each is just what the tests require. In order to keep the primary tests passing, make sure that your custom properties come *after* the required parameters (if at all). Run your tests constantly to make sure you don't accidentally break anything, ok?

To be nice, we've kick started the code a little bit with some dependency injection and an ID utils function. Before you code, figure out what relationship this is, and who is the parent and who is the child. These two classes are the only ones you need. *hint hint what does that say about the relationship?* From there, just follow the tests and don't forget to reference your study guide!

_**Now get out there and good luck!**_
