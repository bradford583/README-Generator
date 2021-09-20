// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const util = require('util')
const fs = require('fs');
const choices = require('inquirer/lib/objects/choices');
//const axios = require("axios");
const api = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of q   uestions for user input
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
        name: 'projectInfo',
        message: 'What does your project do?',
        //make sure something was entered
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("You must enter the name of the repo.");
            }
            return true
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
        choices: ["html", "css", "js", "node", "python", 'c++', 'c.', 'java', 'c#', 'visual basic'],
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
        choices: ['none', 'afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0']
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Your README.md has been generated!');
    });
}

const writeFileAsync = util.promisify(writeToFile);
// TODO: Create a function to initialize app
async function init() {
    try {
        // Reference inquiter array with prompts
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Your responses have been logged. Calling to Github...");

        const userInfo = await api.getUser(userResponses);
        console.log("Your GitHub user info: ", userInfo);

        //pass data to markdown
        console.log("Generating your markdown");
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);

        //write markdown
        await writeFileAsync('README.md', markdown);
    } catch (error) {
        console.log(error);
    }
};

// Function call to initialize app
init();
