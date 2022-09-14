//https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>

// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdownPage = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the README?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description for the README:",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please provide a description for the README!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("Please provide installation instructions!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage information?",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please provide usage information!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contribution",
    message: "What are the contributing guidelines?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please provide contributing guidelines!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "tests",
    message: "Provide the test instructions:",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please provide test instructions!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "What license will is the project covered by?",
    choices: [
      new inquirer.Separator(),
      "MIT License",
      "GNU GPLv3",
      new inquirer.Separator(),
      "GNU AGPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense",
    ],
    default: 0,
  },
  {
    type: "input",
    name: "githubUsername",
    message: "What is your github username?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please provide github username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please provide your email address!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please provide your email address!");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./dist/${fileName}`, data, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((userInput) => {
      console.log("createing markup");
      return generateMarkdownPage(userInput);
    })
    .then((markupData) => {
      console.log("creating README file");
      return writeToFile("README.md", markupData);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function call to initialize app
init();
