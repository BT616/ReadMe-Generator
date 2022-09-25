// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input


const licenses =['MIT','MPL','Apache'];

const questions = [ 
    {
        type:'input',
        name:'username',
        question:'What is your Github username?',
    },

    {
        type: 'input',
        name:'title',
        question:'What is the title of your project?',
    },
    {
        type:'input',
        name:'description',
        question:'Write a decription of your project',

    },////
    {
        type:'list',
        name:'license',
        message:'Please choose a license for your repo',
        choices: licenses
        
    },
    {
        type:'input',
        message: 'Describe steps required to install your project',
        name: 'installation'
    },
    {
        type:"input",
        message:'Provide instructions and examples of your project for usage section',
        name: 'usage',
    },
    {
        type:'input',
        message:'What command should be used to run test?',
        name: 'test',
    },
    {
        type:'input',
        message: 'Provide guidlines on how other developers can contribute',
        name: 'contribute',
    },
   
];

// TODO: Create a function to write README file
function writeToFile(data){
    const filename = "README.md";

    fs.writeFile(filename,data,function(err)
    { err? console.log(err) : console.log(filename +'created')

    });
}
      



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers)=> writeToFile(generateMarkdown(answers)))
    
    }



// Function call to initialize app
init();
