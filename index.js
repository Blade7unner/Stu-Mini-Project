const inquirer = require('inquirer');
const fs=require("fs");

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Where are you located?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'What is your bio?',
      name: 'bio',
    },
    {
      type: 'input',
      message: 'What is your LinkedIn URL?',
      name: 'linkedIn',
    },
    {
      type: 'input',
      message: 'What is your GitHub URL?',
      name: 'GitHub',
    },
  ]);