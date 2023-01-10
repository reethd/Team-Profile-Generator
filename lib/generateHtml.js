const generateHtml = (team) => {
  const htmlTemplateArr = [];
  const htmlHead = `<!DOCTYPE html>
  <html lang="en-us">
    <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" 
          crossorigin="anonymous"
          >
      <meta charset="UTF-8" />
      <link rel = "stylesheet" href = "../src/styles.css">
      <title>Team Profile</title>
    </head>

    <body>
    <h1>Team Profile</h1>
    <div class=card-container>
    `;
  htmlTemplateArr.push(htmlHead);

  for (let i = 0; i < team.length; i++) {
    let employeeCard = `
    <div class=employee-card>
    <h2>${team[i].name}</h2>
    <h3>${team[i].getRole()}</h3>
    <p>Employee ID#: ${team[i].id}</p>
    <p>Email:<a href="mailto:${team[i].email}">${team[i].email}</a></p>
    `;

    if (team[i].getRole() === "Manager") {
      employeeCard += `<p>Office Number: ${team[i].officeNumber}</p>`;
    }
    if (team[i].getRole() === "Engineer") {
      employeeCard += `<p>Github Username: <a href = "https://github.com/${team[i].github}">${team[i].github}</a></p>`;
    }
    if (team[i].getRole() === "Intern") {
      employeeCard += `<p>School: ${team[i].school}</p>`;
    }

    employeeCard += `
  </div>`;
    htmlTemplateArr.push(employeeCard);
  }

  const htmlFooter = `
</div>
</body>
</html>`;

  htmlTemplateArr.push(htmlFooter);
  return htmlTemplateArr;
};

module.exports = generateHtml;
