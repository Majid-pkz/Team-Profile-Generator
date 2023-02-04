

function generateTeam(team) {

    function generateManager(manager) {
        return `
           
        <div class="card m-4 " style="width: 18rem;">
            <div class="card-header text-bg-primary fs-3 text-center ">
            <p> ${manager.getName()} </p>
            <p> ${manager.getRole()} </p>            
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${manager.getId()} </li>
              <li class="list-group-item">${manager.getEmail()} </li>
              <li class="list-group-item">${manager.officeNumber} </li>
            </ul>
         </div>    
    
        `
    }

    const htmlData = []

    htmlData.push(team
        .filter(e => e.getRole() === 'Manager')
        .map(m => generateManager(m))
        )

        // repeat thr e above for each role type

        return htmlData.join("")
}

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

        <title>Team-G</title>
    </head>
    <body>
    <header  class="text-center text-bg-danger fs-1  p-4">My Team</header>
    <main class=" container  row  d-flex justify-content-around">

        <div>
        ${generateTeam(team)}
        </div> 
     



    </main>
        
    </body>
    </html>
    `
}