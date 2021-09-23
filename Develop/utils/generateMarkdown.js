// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "mit":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      
    case "apache-2.0":
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    
    case "bsd-3-clause":
      return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "mit":
      return `[MIT](https://opensource.org/licenses/MIT)`
      
    case "apache-2.0":
      return `[Apache-2.0](https://opensource.org/licenses/Apache-2.0)`
    
    case "bsd-3-clause":
      return `[BSD 3 Clause](https://opensource.org/licenses/BSD-3-Clause)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponses, userInfo) {
  //Create title and description
  let draftMarkdown =

  `# ${userResponses.title} ${renderLicenseBadge(userResponses.licenses)}

  ## Description

  ${userResponses.description}

  ## Installation 
  
  ${userResponses.installation}
  
  ## Languages 
  
  ${userResponses.languages}
  
  ## Usage 
  
  ${userResponses.usage}
  
  ## Contributing 
  
  ${userResponses.contributing}
  
  ## Tests 
  
  ${userResponses.tests}
  
  ## License

  This project uses a ${renderLicenseLink(userResponses.licenses)} license.
  `

  //Questions
  // let draftDeveloper = 
  // `
  // ---
  // ##Questions?
  

  // For any questions, please contact me with the information below:

  // GitHub: [@${userInfo.login}](${userInfo.url})
  // `;

  // //if null add to developer section
  // if (userInfo.email !== null) {
  //   draftDeveloper +=
  //   `Email: ${userInfo.email}`
  // };

  // //add dev section to markdown
  // draftMarkdown += draftDeveloper;

  return draftMarkdown;
};

module.exports = generateMarkdown;
