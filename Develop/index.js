// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const util = require('util')
const fs = require('fs');
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
        name:'repoName',
        message:'Please enter the name of your repo:',
        //make sure something was entered
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("You must enter the name of the repo.");
            }
            return true;
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
