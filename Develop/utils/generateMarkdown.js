// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponses, userInfo) {
  //Create title and description
  let draftMarkdown =
  `# ${userResponses.title}

  ## Description

  ${userResponses.description}
  `

  //License
  draftMarkdown += ` * [License](#license)`;

  //installation
  if (userResponses.installation !== '') {
    draftMarkdown +=`##Installation ${userResponses.installation}`
  };

  //Usage
  if (userResponses.usage !== '') {
    draftMarkdown +=`##Usage ${userResponses.usage}`
  };
}

module.exports = generateMarkdown;
