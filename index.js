const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Where are you located?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'What is your bio?',
      name: 'bio',
    },
    {
      type: 'input',
      message: 'What is your LinkedIn URL?',
      name: 'linkedIn',
    },
    {
      type: 'input',
      message: 'What is your GitHub URL?',
      name: 'GitHub',
    },
  ])
  .then((answers) => {
    // Function to generate HTML string
    const generateHTML = ({ name, location, bio, linkedIn, GitHub }) => {
      return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${name}'s Portfolio</title>
          <style>
            body { font-family: Arial, sans-serif; }
            /* Add more styles here */
          </style>
        </head>
        <body>
          <h1>${name}</h1>
          <p>Location: ${location}</p>
          <p>Bio: ${bio}</p>
          <p>LinkedIn: <a href="${linkedIn}">${linkedIn}</a></p>
          <p>GitHub: <a href="${GitHub}">${GitHub}</a></p>
        </body>
        </html>
      `;
    };

    // Write the HTML string to a file
    fs.writeFile('portfolio.html', generateHTML(answers), (err) => {
      if (err) {
        console.error('An error occurred:', err);
        return;
      }
      console.log('Portfolio created!');
    });
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
