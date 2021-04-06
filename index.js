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
  ` <h1>${answers.title}</h1>
    <h4>Contents</h4>
    <ul>
      <li><a href="#description">Description, Installation, Usage, Contributing, and Tests</a></li>
      <li><a href="#license">License</a></li>
      <li><a href="#questions">Questions</a></li>
    </ul>
   <hr/>
    <h2 id="description">Description, Installation, Usage, Contributing, and Tests</h2>
    <h4>Description</h4>
    <p>${answers.description}</p>
    <h4>Installation Instructions</h4>
    <p>${answers.installation}</p>
    <h4>Usage Information</h4>
    <p>${answers.usage}</p>
    <h4>Contribution Guidelines</h4>
    <p>${answers.contribution}</p>
    <h4>Test Instructions</h4>
    <p>${answers.testing}</p>
    <h2 id="license">License</h2>
    <p>${answers.license}</p>
    <h2 id="questions">Questions</h2>
    <p>My GitHub username is: ${answers.github}</p>
    <p>My email address is: ${answers.email}</p>`;

// Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('README.md', generateReadMe(answers)))
    .then(() => console.log('Successfully wrote to ReadME'))
    .catch((err) => console.error(err));
};

init();
