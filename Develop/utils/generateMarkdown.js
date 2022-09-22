// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT License'){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  }else if (license === 'Mozilla public license 2.0'){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]"
  } else if( license ==='Apache License 2.0'){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"
  } else if(license === 'Eclipse Public License 1.0'){
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  }else if (license ==='IBM public license Versions'){
  return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
}
}
module.exports = renderLicenseBadge;


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license ==='MIT License'){
    return "(https://opensource.org/licenses/MIT)"
  } 
  else if (license ==='Mozilla public license 2.0'){
    return "(https://opensource.org/licenses/MPL-2.0)"
  }
  else if (license === 'Apache License 2.0'){
    return "(https://opensource.org/licenses/Apache-2.0)"
  }



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
