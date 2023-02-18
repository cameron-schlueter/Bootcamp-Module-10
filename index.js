const fs = require ('fs')
const inquirer = require('inquirer');
const handlebars = require('handlebars');

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
manager
  const teamMembers = [
    {
      name: managerAnswers.managerName,
      id: managerAnswers.managerId,
      email: managerAnswers.managerEmail,
      officeNumber: managerAnswers.managerOfficeNumber,
    },
  ];

  inquirer
  .prompt([
    {
      type: 'list',
      name: 'memberType',
      message: 'What type of team member would you like to add?',
      choices: ['Engineer', 'Intern', 'None'],
    },
  ])
  .then((memberTypeAnswer) => {
    // Depending on the member type, prompt the user for additional information
    switch (memberTypeAnswer.memberType) {
      case 'Engineer':
        inquirer
          .prompt([
            {
              type: 'input',
              name: 'engineerName',
              message: "What is the engineer's name?",
            },
            {