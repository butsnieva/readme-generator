// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch (license) {
    case 'MIT':
      licenseBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
      break
    case 'Apache':
      licenseBadge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
      break
    case 'GPL':
      licenseBadge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
      break
    case 'none':
      return licenseBadge = ""
  }

  return licenseBadge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  switch (license) {
    case 'MIT':
      licenseLink = "[license](https://opensource.org/licenses/MIT)"
      break
    case 'Apache':
      licenseLink = "[license](https://opensource.org/licenses/Apache-2.0)"
      break
    case 'GPL':
      licenseLink = "[license](https://www.gnu.org/licenses/gpl-3.0)"
      break
    case 'none':
      return licenseLink = ""
  }

  return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  switch (license) {
    case 'MIT':
      licenseSection = "This project is licensed under the MIT " + renderLicenseLink(license) + "."
      break
    case 'Apache':
      licenseSection = "This project is licensed under the Apache " + renderLicenseLink(license) + "."
      break
    case 'GPL':
      licenseSection = "This project is licensed under the GPL " + renderLicenseLink(license) + "."
      break
    case 'None':
      return licenseSection = ""
  }

  return licenseSection
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributing](#contributing)
  5. [Test](#test)
  6. [Questions](#questions)
  7. [License](#license)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${data.link}
  ## Contributing
  ${data.contributing}
  ## Test
  ${data.test}
  ## Questions
  To review the code for this application, visit my [GitHub page](https://github.com/${data.github}). For any additional questions, feel free to email me at ${data.email}.
  ## License
  ${renderLicenseSection(data.license)}
`
}

module.exports = generateMarkdown
