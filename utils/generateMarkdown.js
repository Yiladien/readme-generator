// licenses objects with the badge and links
const licenseData = [
  {
    type: "MIT License",
    badge:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    link: "(https://opensource.org/licenses/MIT)",
  },
  {
    type: "MIT License",
    badge:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    link: "(https://opensource.org/licenses/MIT)",
  },
  {
    type: "GNU GPLv3",
    badge:
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    link: "(https://www.gnu.org/licenses/gpl-3.0)",
  },
  {
    type: "GNU AGPLv3",
    badge:
      "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
    link: "(https://www.gnu.org/licenses/agpl-3.0)",
  },
  {
    type: "GNU LGPLv3",
    badge:
      "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
    link: "(https://www.gnu.org/licenses/lgpl-3.0)",
  },
  {
    type: "Mozilla Public License 2.0",
    badge:
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    link: "(https://opensource.org/licenses/MPL-2.0)",
  },
  {
    type: "Apache License 2.0",
    badge:
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    link: "(https://opensource.org/licenses/Apache-2.0)",
  },
  {
    type: "Boost Software License 1.0",
    badge:
      "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    link: "(https://www.boost.org/LICENSE_1_0.txt)",
  },
  {
    type: "The Unlicense",
    badge:
      "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
    link: "(http://unlicense.org/)",
  },
];

// function to create the markdown for the license section and badge
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  }

  const licenseObj = licenseData.filter(
    (licenseName) => licenseName.type === license
  );

  const licenseMarkdown = {
    licenseSection: `
---
## License

This project is covered under the license: [${licenseObj[0].type}]${licenseObj[0].link}

`,
    licenseBadge: `${licenseObj[0].badge}
`,
  };

  return licenseMarkdown;
}

// function to create the table of contents depending on which fields have data from the user. Not all section may be required in the future.
function renderTOC(userResponses) {
  let tocList = `## Table of Contents
`;
  if (userResponses.installation) {
    tocList =
      tocList +
      `- [Installation](#installation\)
`;
  }
  if (userResponses.usage) {
    tocList =
      tocList +
      `- [Usage](#usage\)
`;
  }
  if (userResponses.contribution) {
    tocList =
      tocList +
      `- [Contributing](#contributing\)
`;
  }
  if (userResponses.test) {
    tocList =
      tocList +
      `- [Tests](#tests\)
`;
  }
  if (userResponses.license) {
    tocList =
      tocList +
      `- [License](#license\)
`;
  }
  if (userResponses.email) {
    tocList =
      tocList +
      `- [Questions](#questions\)
`;
  }

  return tocList;
}

function renderImage(imgAltText, imgLink) {
  if (!imgLink) {
    return ``;
  }

  return `![${imgAltText}](${imgLink})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // creating table of contents based on user input
  const tableOfContents = renderTOC(data);
  // deconstructing license section and badge markdown
  const { licenseSection, licenseBadge } = renderLicenseSection(data.license);
  // creating image markdown
  const imgMarkdown = renderImage(data.imageAltText, data.imageLink);

  // creating readme markdown
  return `# ${data.title}
${licenseBadge}
## Description

${data.description}

${imgMarkdown}

---
${tableOfContents}
---
## Installation

${data.installation}

---
## Usage

${data.usage}

---
## Contributing

${data.contribution}

---
## Tests

${data.tests}

${licenseSection}
---
## Questions

Please contact the owner with any questions.
Email: ${data.email}
GitHub profile: https://github.com/${data.githubUsername}


---
`;
}

module.exports = generateMarkdown;
