const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'Input',
        name: 'title',
        message: 'what is the title of you repository?'
    },
    {
        type: 'Input',
        name:'description',
        message:'Describe your project'
    },
    {
        type: 'Input',
        name: 'installation',
        message: 'What are the instructions for installation?'
    },
    {
        type: 'Input',
        name:'usage',
        message:'Please input any relevant user information.'
    },
    {
        type: 'Input',
        name: 'contributions',
        message: 'What are the guidelines for contributions?'
    },
    {
        type: 'Input',
        name:'tests',
        message:'Please input any relevant testing instructions.'
    },
    {
        type: 'Input',
        name:'license',
        message:'What type of license would you like to use? Please input License text below.'
    },
    {
        type: 'Input',
        name:'username',
        message:'Please enter Github username and link to github profile.'
    },
    {
        type: 'Input',
        name:'email',
        message:'Please also enter the email address.'
    },

    
])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)

    const readme = `
    \r\n# ${answers.title} \r\n   

    \r\n## Description \r\n  ${answers.description}
  
    \r\n## Installation \r\n  ${answers.installation}

    \r\n## Usage \r\n  ${answers.usage}

    \r\n## Contributions \r\n  ${answers.contributions}

    \r\n## Tests \r\n  ${answers.tests}

    \r\n## Questions \r\n ${answers.username}\r\n \r\n${answers.email}

    \r\n## License \r\n ${answers.license}
    `;
    fs.writeFile('README.md', readme, (err) => {
        if (err) {
            console.log('Err: ', err)
        }else{
            console.log('README.md successfully created')
        }
    })
  })
//  ${}

// [Description](#description)
// [Installation](#installation)
// [Usage](#usage)
// [Contributions](#contributions)
// [Tests](#tests)
// [Questions](#username)
// [License](#license)