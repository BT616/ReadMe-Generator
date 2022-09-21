// TODO: Include packages needed for this application
const fs = require('fs');
const path = require("path");
const inquirer = require('inquirer');
const generateMarkdown = require('generateMarkdown')

// TODO: Create an array of questions for user input
// 
const questions = [ 
    {
        type:'input',
        name:'username',
        question:'What is your Github username?',
    },
    {
        type:'input ',
        name:'repo',
        question:'What is the name of your Github repo?',
    },
    {
        type: 'input',
        name:'Title',
        question:'What is the title of your project?',
    },
    {
        type:'input',
        name:'project descripton',
        question:'Write a decription of your project',

    },
    {
        type:'input',
        name:'license',
        message:'Please choose a license for your repo',
        choice:['MIT License','apache license 2.0','The GPL License','apache license']
    },
    {
        type:'input',
        message: 'describe steps required to install your project',
        name: 'installation'
    },
    {
        type:"input",
        message:'provide instructions and examples of your prject in use for usage section',
        name: 'usage',
    },
    {
        type:'input',
        message:'what command should be used to run test?',
        name: 'test',
    },
    {
        type:'input',
        message: 'instructions on how to use'
        name: 'usage'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>{
        err? console.error(err): console.log(success)
    });
}




// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
