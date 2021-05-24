// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = () =>
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Project title:',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Project title is required!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description:',
        validate: input => {
            if(input) {
                return true;
            } else {
                console.log("Please provide a brief description of your project!");
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter instructions and examples for use:',
    },
    {
        type: 'input',
        name: 'link',
        message: 'Add a link to the deployed application:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contribution guidelines: ',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Test instructions: ',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email: ',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license: ',
        choices: ['MIT', 'Apache', 'GPL', 'none']
    }
    ])


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    try {
        fs.writeFileSync(fileName, data)
        console.log("Success!")
    } catch (error) {
        console.log(error)
    }
}

// TODO: Create a function to initialize app
function init() {
    questions().then((data) => {
        const markdown = generateMarkdown(data)
        writeToFile("MyREADME.md", markdown)
    })
}

// Function call to initialize app
init()
