// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  let badge ="";
if (license ='MIT License'){
  badge = `[![License](https://img.shields.io/badge/license-${license}-yellow)`;
}if (license ='Apache License 2.0'){
  badge = `[![License](https://img.shields.io/badge/license-Apache_2.0-blue.svg)`;
}if (license ='IBM public license Versions'){
  badge = `[![License](https://img.shields.io/badge/License-IPL_1.0-blue.svg)`;
}if (license ='Mozilla public license 2.0'){
  badge = `[![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
}else return "";
return badge;
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  let currentLink ="";
  if( license = 'MIT License'){
    currentLink= "(https://opensource.org/licenses/MIT)";
  }
  if (license ='Mozilla public license 2.0'){
    currentLink= "(https://opensource.org/licenses/MPL-2.0)";
  }
  if (license = 'Apache License 2.0'){
    currentLink="(https://opensource.org/licenses/Apache-2.0)";
  }
  if (license ='IBM public license Versions'){
    currentLink='(https://opensource.org/licenses/IPL-1.0)';
  }else return "";
  return currentLink;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ##Description
  ${data.description}

  ### Table of Contents
  
  *[Installation]#Installation
  *[License]#License
  *[Usage]#usage
  *[Contribute]#contribute
  *[contact]#contact

  ---

  ## Installation

  ${data.installation}

  ##License
  ${renderLicenseBadge()}  ${renderLicenseLink()}
 
   ${data.license}


  ## Usage
  To use the app 
  ${data.usage}

  ## Contribute 
  ${data.contribute}

  ##Test 
  ${data.test}

  ##Contact 
  ${data.username}
 

`;
}

module.exports = generateMarkdown,renderLicenseBadge,renderLicenseLink,renderLicenseSection;
