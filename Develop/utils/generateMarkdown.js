// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT License'){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }else if (license === 'Mozilla public license 2.0'){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else if( license ==='Apache License 2.0'){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  
  
  'The GPL License']
'IBM public license Versions'
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ###Description
  ${data.description}

  ### Table of Contents
  
  [Installation] #Installation
  [License]#License
  [Usage]#usage
  [Contribute]#contribute
  [contact]#contact


  ## Installation

  ${data.installation}

  ##License
  ${data.license}

  ## Usage
  ${data.usage}

  ## Contribute 
  ${data.contribute}

  ##Test 
  ${data.test}

  ##Contact 
  ${data.github}
  ${data.email}

`;
}

module.exports = generateMarkdown;
