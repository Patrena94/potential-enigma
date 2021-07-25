// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer =require("inquirer")
const createPage=require('./utils/generateMarkdown.js');
// const userInput =process.argv[2].splice()
// const badgeSelector =(license)=> {
//     if (license=="")
// }
const generatePage = (obj) => { 
return `


                                                                  # **${obj.title}**
      
# License
${obj.license}   



 # Project Description
${obj.Projectdescription}   


 # Table of Content 
 1.${obj.TableofContentA}
 2.${obj.TableofContentB}
 3.${obj.TableofContentC}
 4.${obj.TableofContentD}
 5.${obj.TableofContentE}
 6.${obj.TableofContentF}

 #Questions  

 User with questions about this project should contact me at ${obj.emailLink}.  You may also review my portfolio at ${obj.userName} Github repository(https://github.com/${obj.github}).
 

 
# Installation
${obj.installationInstructions}  


# Usage Information
 ${obj.usagedetails}  

  
# Contribution Guidelines
${obj.contributiondetails}  


# Test Instructions
${obj.testInstructions}  


❤️ Made with Love by ${obj.userName}, LLC. 2021  

![Build Status](https://img.shields.io/github/languages/top/Patrena94/Smith-Corporation-Work-Scheduler)  
![build status](https://img.shields.io/github/languages/top/Patrena94/Mobile-Drive-in-Theater)
![Build Status](https://img.shields.io/github/languages/top/Patrena94/Multi-City-Weather-Dashboard)
 `;
};
const promptUserquestions = ()=> {
    inquirer.prompt([ 
        {
        type: 'input',
        name: 'title',
        message:'what is the Project title?(required)',
        validate: titleInput =>{
            if(titleInput) {
                return true;
            }  else {
                console.log('Please enter your Project title!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name:'confirmProjectdescription',
        message: "Would you like to describe the project?",
            },
    
{
    type: 'checkbox',
    name:'Projectdescription',
    message: "Please describe the project?",
    choices: ['The Readme Generator is design to create a Professional Readme file for an open source project app. The Readme Generator will generate a file that informs the user of purpose of the app, how to install the app, how to report issues, and how to make contributions, which will allow for other  developers to contribute to the success of the project.', 'The Readme Generator is design to create a Professional Readme file for an open source project app. The Readme Generator will generate a file that informs the user of purpose of the app, how to install the app, how to report issues, and how to make contributions, which will allow for other  developers to contribute to the success of the project.'],
},
    {
    type: 'checkbox',
    name:'license',
    message: 'which license would you like to utilize?(selectone)',
    choices: ['MIT','GNU GPLv3','APACHE','Mozilla']
    },
{
    type: 'input',
    name: 'userName',
    message: 'What is your name?(required)',
    validate: userNameInput=> {
        if(userNameInput) {
            return true;
        } else{
            console.log('Please enter your name?');
            return false;
        }
    }
  },
  { 
      type: 'input',
      name: 'github',
      message: 'Enter your Github username (required)',
      validate: (githubInput) => {
          if (githubInput) {
              return true;
          } else {
              console.log('Please enter your Github user name!');
          }
      }
  },
  { 
    type: 'input',
    name: 'emailLink',
    message: 'Enter your Email address(required)',
    validate: (githubInput) => {
        if (githubInput) {
            return true;
        } else {
            console.log('Please enter your Github user name!');
        }
    }
},
    {
    type: 'confirm',
    name:'confirminstallationInstructions',
    message: "Would you like to describe how to install your application?",
        },
{
    type: 'checkbox',
    name:'installationInstructions',
    message: "Please describe how to install your application?",
    choices: ['The user will need to create a .gitignore file and include node_modules and .DS_Store/.  In addition, the user will need to have package.json with the required dependencies as well as npm init.', 'The user will need to create a .gitignore file and include node_modules and .DS_Store/.  In addition, the user will need to have package.json with the required dependencies as well as npm init.'],
},
{
    type: 'confirm',
    name:'confirminusagedetails',
    message: "Would you like to provide usage details?",
        },
{
type: 'checkbox',
name: 'usagedetails',
message: 'please provide usage details?',
choices: ['The user will need to type node index.js into the command line in order to initiate the program. The command line will response with a number of prompts to obtain information from the Use to populate and create the readme file. The User using Visual Studio Code will notice the new file on the explorer file listing the left-hand side of the screen.  The user will should click onto this file to view its contents.  The information that the user provided will be display in the readme file.  The user should right click the ReadMe. File(tabto see an additional preview of the readme file.','The user will need to type node index.js into the command line in order to initiate the program. The command line will response with a number of prompts to obtain information from the Use to populate and create the readme file. The User using Visual Studio Code will notice the new file on the explorer file listing the left-hand side of the screen.  The user will should click onto this file to view its contents.  The information that the user provided will be display in the readme file.  The user should right click the ReadMe. File(tab) to see an additional preview of the readme file.'],
},
{
    type: 'confirm',
    name:'confirmincontributiondetails',
    message: "Would you like to describe the contribution guidelines?",
        },
    {
    type: 'checkbox',
    name: 'contributiondetails',
    message: 'please provide contribution details?',
    choices: ['User interested in contributing to the project will need to create their own branch in GitHub.  They may submit changes and updates to be incorporated into the app for approval by the owner.  Individual may also fork the application to their individual accounts.','User interested in contributing to the project will need to create their own branch in GitHub.  They may submit changes and updates to be incorporated into the app for approval by the owner.  Individual may also fork the application to their individual accounts.']
    // validate: contributiondetailsInput => {
    // if(contributiondetailsInput){
    //     return true;
    // } else{ console.log('Please enter contribution details!');
    // return false;
    // }
    // }
    },
    {
        type: 'confirm',
        name:'confirmintestInstructions',
        message: "Would you like to describe the test instructions",
            },
    {
    type: 'checkbox',
    name: 'testInstructions',
    message: 'please provide test instructions?',
    choices: ['The user will need to type node index.js into the command line in order to initiate the program. The command line will response with a number of prompts to obtain information from the Use to populate and create the readme file. The User using Visual Studio Code will notice the new file on the explorer file listing the left-hand side of the screen.  The user will should click onto this file to view its contents.  The information that the user provided will be display in the readme file.  The user should right click the ReadMe. File(tabto see an additional preview of the readme file.','The user will need to type node index.js into the command line in order to initiate the program. The command line will response with a number of prompts to obtain information from the Use to populate and create the readme file. The User using Visual Studio Code will notice the new file on the explorer file listing the left-hand side of the screen.  The user will should click onto this file to view its contents.  The information that the user provided will be display in the readme file.  The user should right click the ReadMe. File(tab) to see an additional preview of the readme file.'],
    // validate: usagedetailsInput => {
    // if(usagedetailsInput){
    //     return true;
    // } else{ console.log('Please enter your usage details!');
    // return false;
    },
    {
            type: 'checkbox',
            name:"TableofContentA",
            message: "Would you please list all sections of your document?(select one new choice)",
            choices: ['Description', 'Installation', 'Usage', 'License', 'Contributors', 'Tests',],
    },
    {
        type: 'checkbox',
        name:"TableofContentB",
        message: "Would you please list all sections of your document?(select one new choice)",
        choices: ['Description', 'Installation', 'Usage', 'License', 'Contributors', 'Tests',],
},
{
    type: 'checkbox',
    name:"TableofContentC",
    message: "Would you please list all sections of your document?(select one new choice)",
    choices: ['Description', 'Installation', 'Usage', 'License', 'Contributors', 'Tests',],
},
{
    type: 'checkbox',
    name:"TableofContentD",
    message: "Would you please list all sections of your document?(select one new choice)",
    choices: ['Description', 'Installation', 'Usage', 'License', 'Contributors', 'Tests',],
},
{
    type: 'checkbox',
    name:"TableofContentE",
    message: "Would you please list all sections of your document?(select one new choice)",
    choices: ['Description', 'Installation', 'Usage', 'License', 'Contributors', 'Tests',],
},
{
    type: 'checkbox',
    name:"TableofContentF",
    message: "Would you please list all sections of your document?(select one new choice)",
    choices: ['${Description}', '${Installation}', '${Usage}', '${License}', '${Contributors}', '${Tests}',],
}
    ])
    .then(answers => {
        console.log(answers)
        //pass this answers object to the function that organizes the README format
        const formattedMarkdown = generatePage(answers)
        //and then use fs to create the file
        fs.writeFile("Readme.md", formattedMarkdown, err => {
            if(err) throw err;
        })
    })
}
promptUserquestions()