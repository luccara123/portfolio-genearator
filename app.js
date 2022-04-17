//const profileDataArgs = process.argv.slice(2, process.argv.length);
//console.log(profileDataArgs);

//const printProfileData = (profileDataArr) => {
   // for (let i = 0; i < profileDataArr.length; i++) {
     //   console.log(profileDataArr[i]);
     // }
      
      //same as
    //  profileDataArr.forEach((profileItem) => {
     //   console.log(profileItem)
     // });
   // };

//printProfileData(profileDataArgs)


//ARROW FUNCTIONS
//const generatePage1 = () => 'Name: Jane, Github: janehub';
//console.log(generatePage1());


//TEMPLATE LITERALS
//const generatePage2 = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;


//MULTI-LINE STRINGS
// template literals allows you to break lines
//const generatePage3 = (userName, githubName) => {
 // return `
  //  Name: ${userName}
  //  GitHub: ${githubName}
//  `;
//};

// there are 3 types of module: 
//core modules: built in modules in node.js framework
// local modules: are modules written by thr user
// third-party-modules: modules from the web

// Project





//const profileDataArgs = process.argv.slice(2);
//const [name, github] = profileDataArgs;
//const name = profileDataArgs[0];  older way
//const github = profileDataArgs[1]; older way
//assignment destructuring. In basic terms, it assigns elements of an array to variable names in a single expression, as shown here:


//project
const inquirer = require('inquirer');
//const fs = require('fs');

//const generatePage = require('./src/page-template');


//const pageHTML = generatePage(name, github);

//fs.writeFile('./index.html', pageHTML, err => {
//  if (err) throw err;

 // console.log('Portfolio complete! Check out index.html to see the output!');
//});

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAbout',
      message: 'Would you like to enter some information about yourself for an "About" section?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:',
      when: ({ confirmAbout }) => {
        if (confirmAbout) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username (Required)',
      validate: githubUserInput => {
        if (githubUserInput) {
          return true;
        } else {
          console.log('Enter your GitHub Username');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:'
    }
  ]);
};

const promptProject = portfolioData => {
  // If there's no 'projects' array property, create one
if (!portfolioData.projects) {
  portfolioData.projects = [];
}
  console.log(`
=================
Add a New Project
=================
`);
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project? (Required)',
      validate: projectNameInput => {
        if (projectNameInput) {
          return true;
        } else {
          console.log('What is the name of your project?');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
      validate: projectDescriptionInput => {
        if (projectDescriptionInput) {
          return true;
        } else {
          console.log('Provide a description of the project');
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (Required)',
      validate: githubLinkInput => {
        if (githubLinkInput) {
          return true;
        } else {
          console.log('Enter the GitHub link to your project.');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
    }
  ])
  
  .then(projectData => {
    portfolioData.projects.push(projectData);

    if (projectData.confirmAddProject) {
      return promptProject(portfolioData);

    } else {
      return portfolioData;
    }
  });
};




promptUser()
.then(promptProject)
.then(portfolioData => {
  console.log(portfolioData);
});