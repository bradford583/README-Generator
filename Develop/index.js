// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const util = require('util')
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');
// TODO: Create an array of questions for user input
const questions = [
    //get users name
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?' 
    },
    //github username
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub Username:',
    //check to see if anything was entered
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("You must enter a GitHub Username.");
        }
        return true;
    }
    },
    //get repos
    {
        type:'input',
        name:'project',
        message:'Please enter the project name:',
        //make sure something was entered
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("You must enter the name of the repo.");
            }
            return true;
        }
    },
    // title of project
    {
        type: 'input',
        name: 'function',
        message: 'What does your project do?',
        //make sure something was entered
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("You must enter a title for your project:");
            }
        }
    },
    //motivation for project
    {
        type: 'input',
        name: 'motiv',
        message: 'What was your motivation for this project?'
    },
    //languages section
    {
        type: 'list',
        name: 'languages',
        Choices: ["html", "css", "js", "node", "python", 'c++', 'c.', 'java', 'c#', 'visual basic'],
        message: 'What languages did you use on you project?'
    },
    //installation
    {
        type: 'input',
        name: 'instruct',
        message: 'How do you use your application?'
    },
    //licenses
    {
        type: 'list',
        name: 'licenses',
        message: 'Choose the license for your project',
        choices: ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0']
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log();
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
