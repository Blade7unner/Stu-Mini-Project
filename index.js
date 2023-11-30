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
    const generateHTML = ({ name, location, bio, linkedIn, GitHub }) => {
      return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${name}'s Portfolio</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              color: #333333;
              text-align: center;
              margin: 0;
              padding: 0;
            }
            .container {
              width: 80%;
              margin: auto;
              padding: 20px;
            }
            h1 {
              color: #4A90E2;
              text-align: center;
            }
            p {
              font-size: 1.1em;
              line-height: 1.5;
            }
            a {
              color: #4A90E2;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>${name}</h1>
            <p>Location: ${location}</p>
            <p>Bio: ${bio}</p>
            <p>LinkedIn: <a href="${linkedIn}" target="_blank">${linkedIn}</a></p>
            <p>GitHub: <a href="${GitHub}" target="_blank">${GitHub}</a></p>
          </div>
        </body>
        </html>
      `;
    };

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

