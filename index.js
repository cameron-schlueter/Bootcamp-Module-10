const inquirer = require('inquirer');

// Define an array of questions for the user
const questions = [
  {
    type: 'input',
    name: 'managerName',
    message: "What is the team manager's name?",
  },
  {
    type: 'input',
    name: 'managerId',
    message: "What is the team manager's ID?",
  },
  {
    type: 'input',
    name: 'managerEmail',
    message: "What is the team manager's email?",
  },
  {
    type: 'input',
    name: 'managerOfficeNumber',
    message: "What is the team manager's office number?",
  },
];

// Prompt the user for input using the questions array
inquirer.prompt(questions).then((answers) => {
  console.log(answers);
});
