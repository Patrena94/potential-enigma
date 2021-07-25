/// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer =require("inquirer")
const createPage=require('./utils/generateMarkdown.js');
// const userInput =process.argv[2].splice()

const generatePage = (obj) => { 
return `
// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>${obj.title}</title>
// </head>
// {/* <body>  
// //     <h1>${obj.userName}</h1>
// //     <h2><a href="https://github.com/${obj.github}">Github</a></h2>
    
// <!-- "Installation-->
// <section id="Description" class="intro">
//     <div class=flex-row">
// </section>
//     <h2 class="section-title primary-border">Description</h2>
// </div>
// <p> ${obj.description}
//     </p>
// </div>
// </section>
// <!-- Installation Section-->
//     <section id="Installation" class="Application">
//     <div class="flex-row">
//      <h2 class="section-title secondary-border">Installation</h2>   
// //     <p> ${obj.installationApplication}</p>
// // </div>
// // <!-- Instructions section -->
// // <section id="Instructions" class="Program Instructions">
// // <div class=flex-row">
// //     <h2 class="section-title primary border"> Instructions</h2>
// //     <p>${obj.Installationdescription} </P>
// // </section>
// //         </div>  
// // <!-- "Usage Information -->
// // <section id="usageInformation" class= usagedetails>
// //     <h2 class="section-title secondary-border">Usage Information</h2>
// //     <div class=flex-row">
// //     <p>${obj.usagedetails}</p>
// // <div> 
// // <!-- "Contribution Guidelines -->
// // <section id="contributionGuidelines" class= Contributiondetails>
// // <div class=flex-row">
// //     <h2 class="section-title secondary-border">Contribution Guidelines</h2>
// //     <p>${obj.contributiondetails}</p>
// // <div> 
// // <!-- "Test Instructions -->
// // <section id="testInstructions" class= testdetails>
// // <div class=flex-row">
// //     <h2 class="section-title secondary-border">Test Instructions</h2>
// //     <p>${obj.testdetails}</p>
// // <div> 
// // </div>
// // <div>
// // // // </body>
// // // // <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
// // // </html>
// `;
// };

// TODO: Create a function to write README file

// const pageHTML =generatePage(userName, githubName);
//   fs.writeFile('readme.md', generatePage("userName", "githubName"), err => {
//     if(err) throw err;
//     console.log('Readme complete! Check out index.html to see the output!');
// });

// console.log(userInput)
// TODO: Create an array of questions for user input
// const questions = [];
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
    type: 'checkbox',
    name:'license',
    message: 'which license would you like to utilize?(selectone)',
    choices: ['MIT','GNU','APACHE']
    },
{
    type: 'input',
    name: 'userName',
    message: 'What is your name?(required))',
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
    type: 'confirm',
    name:'confirminstallationApplication',
    message: "Would you like to describe how to install your application?",
    default: true
        },
{
    type: 'input',
    name:'installationApplication',
    message: "Please describe how to install your application?(required)",
    validate: installationApplicationInput => {
        if(installationApplicationInput) {
            return true;
        }else {
            console.log('Please descripe how to install your application?');
            return false;
        }
    }
},
{
    type: 'confirm',
    name: 'Installationdescription',
    message: 'please provide detail instructions on how the application works?(required)',
    default: true
    },
{
type: 'input',
name: 'Installationdescription',
message: 'Would you like to provide detail about the process?(required)',
validate: InstallationdescriptioInput => {
    if(InstallationdescriptionInput){
        return true;
    } else{ console.log('Please enter your instructions!');
 return false;
}
}
},
{
type: 'confirm',
name: 'usagedetails',
message: 'Would you like to enter usage details?(required)',
default: true
},
{
type: 'input',
name: 'usagedetails',
message: 'please provide usage details?(required',
validate: usagedetailsInput => {
if(usagedetailsInput){
    return true;
} else{ console.log('Please enter your usage details!');
return false;
}
}
},
{
    type: 'confirm',
    name: 'contributiondetails',
    message: 'Would you like to enter contribution details?(required)',
    default: true
    },
    {
    type: 'input',
    name: 'contributiondetails',
    message: 'please provide contribution details?(required)',
    validate: contributiondetailssInput => {
    if(contributiondetailsInput){
        return true;
    } else{ console.log('Please entercontribution details!');
    return false;
    }
    }
    },
    {
        type: 'confirm',
        name: 'testdetails',
        message: 'Would you like to enter test details?(required)',
        default: true
        },
        {
        type: 'input',
        name: 'testdetails',
        message: 'please provide test details?(required)',
        validate: testdetailsInput => {
        if(testdetailsInput){
            return true;
        } else{ console.log('Please enter your test details!');
        return false;
        }
        }
        },
    ]).then(answers => {
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
}