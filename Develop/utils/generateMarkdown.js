// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  return  "![License](https://img.shields.io/badge/license-" + license + "-blue.svg)";


}


//   let badge ="";

// if (license === "MIT"){
//   badge =`[![License](https://img.shields.io/badge/license-MIT-yellow.svg)`;
// } else if (license ===`Apache`){
//   badge = `[![License](https://img.shields.io/badge/license-Apache-blue.svg)`;
// }else if (license ==='MPL'){
//   badge=`[![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
// }else return "";
// return badge;




// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  let licenseLink =""

  if( license ==='MIT'){
    return "(https://opensource.org/licenses/MIT)"
  } 
  else if (license ==='MPL'){
    return"(https://opensource.org/licenses/MPL-2.0)"
  } 
  else if (license === 'Apache'){
   return"(https://opensource.org/licenses/Apache-2.0)"
  }
 return licenseLink;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 return `

 ## License
 ${renderLicenseBadge(license)}
 ${renderLicenseLink(license)}

`
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { 
  
  return `
  
  # ${data.title} 

  ## Description
  ${data.description}

  ### Table of Contents
  
  * [Installation](#Installation)
  * [License](#License)
  * [Usage](#Usage)
  * [Contribute](#Contribute)
  * [Contact](#Contact)

  ---

  ## Installation

  ${data.installation}




  ${data.license}
  ${renderLicenseSection(data.license)}


  ## Usage
  To use the app 
  ${data.usage}

  ## Contribute 
  ${data.contribute}

  ## Test 
  ${data.test}

  ## Contact 
  ${data.username}
  ${data.email}

`;
}

module.exports = generateMarkdown;