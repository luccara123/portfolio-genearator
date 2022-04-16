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



const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;
//const name = profileDataArgs[0];  older way
//const github = profileDataArgs[1]; older way
//assignment destructuring. In basic terms, it assigns elements of an array to variable names in a single expression, as shown here:



fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});

