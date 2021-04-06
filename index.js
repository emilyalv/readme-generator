const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
  //desc, install, usage, contrib, and tests section
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your app?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter an app description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter app usage information:',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Enter contribution guidelines:',
    },
    {
      type: 'input',
      name: 'testing',
      message: 'Enter test instructions:',
    },
  {
      type: 'input',
      name: 'license',
      message: 'Please enter license details:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHuub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
]);
};

const generateReadMe = (answers) =>
  `#${answers.title}
    <h4>Contents</h4>
    [Description] (#description)
    [Installation Instructions] (#installation-instructions)
    [Usage Information] (#usage-information)
    [Contribution Guidelines] (#contribution-Guidelines)
    [Test Instructions] (#test-instructions)
    [License] (#license)
    [Questions] (#questions)

    <h4>Description, Installation, Usage, Contributing, and Tests</h4>
    ##Description
    ${answers.description}
    ##Installation Instructions
    ${answers.installation}
    ##Usage Information
    ${answers.usage}
    ##Contribution Guidelines
    ${answers.contribution}
    ##Test Instructions
    ${answers.testing}
    ##License
    ${answers.license}
    ##Questions
    My GitHub username is: ${answers.github}
    My email address is: ${answers.email}
`;

// Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('README.md', generateReadMe(answers)))
    .then(() => console.log('Successfully wrote to ReadME'))
    .catch((err) => console.error(err));
};

init();
