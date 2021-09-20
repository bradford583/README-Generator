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
    draftMarkdown +=`##Installation ${data.installation}`
  };

  //Usage
  if (userResponses.usage !== '') {
    draftMarkdown +=`##Usage ${data.usage}`
  };

  //contributing
  if (userResponses.contributing !== '') {
    draftMarkdown +=`##Contributing ${data.contributing}`
  };

  //tests
  if (userResponses.tests !== '') {
    draftMarkdown +=`##Tests ${data.tests}`
  };

  //Questions
  let draftDeveloper = 
  `
  ---
  ##Questions?
  ![Developer Profile Picture](${userInfo.avatar_url})

  For any questions, please contact me with the information below:

  GitHub: [@${userInfo.login}](${userInfo.url})
  `;

  //if null add to developer section
  if (userInfo.email !== null) {
    draftDeveloper +=
    `Email: ${userInfo.email}`
  };

  //add dev section to markdown
  draftMarkdown += draftDeveloper;

  return draftMarkdown;
};

module.exports = generateMarkdown;
