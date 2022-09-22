// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
// 
const questions = [ 
    {
        type:'input',
        name:'Username',
        question:'What is your Github username?',
    },
    {
        type:'input ',
        name:'Repo',
        question:'What is the name of your Github repo?',
    },
    {
        type: 'input',
        name:'Title',
        question:'What is the title of your project?',
    },
    {
        type:'input',
        name:'Project Descripton',
        question:'Write a decription of your project',

    },////
    {
        type:'input',
        name:'License',
        message:'Please choose a license for your repo',
        choice:['MIT License','IBM public license Versions','Mozilla public license 2.0','Apache License 2.0','The GPL License']
    },
    {
        type:'input',
        message: 'Describe steps required to install your project',
        name: 'Install'
    },
    {
        type:"input",
        message:'Provide instructions and examples of your project for usage section',
        name: 'Usage',
    },
    {
        type:'input',
        message:'What command should be used to run test?',
        name: 'Test',
    },
    {
        type:'input',
        message: 'Provide guidlines on how other developers can contribute',
        name: 'Contribute',
    },
   
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
      
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses)=>{
        console.log("generating readme file..")
        writeToFile("README.md",generateMarkdown({...inquirerResponses}))
    
    })
}


// Function call to initialize app
init();
