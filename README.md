# QA-Technical-Task
QA Technical Task

- Se han usado las siguientes herramientas:

> Node.js: Entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google.

> Mocha: Framework de pruebas de JavaScript que se ejecuta en Node.js.

> Node-fetch: La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas.



- Inicialización del proyecto:

$ npm init --yes
Wrote to C:\Users\Fran\QA-Technical-Task\package.json:

{
  "name": "qa-technical-task",
  "version": "1.0.0",
  "description": "QA Technical Task",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/GitFranCamacho/QA-Technical-Task.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/GitFranCamacho/QA-Technical-Task/issues"
  },
  "homepage": "https://github.com/GitFranCamacho/QA-Technical-Task#readme"
}



- Instalación mocha:

$ npm i mocha --location=global

changed 78 packages, and audited 79 packages in 8s

20 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities



- Instalación node-fetch:

$ npm i node-fetch --location=global

changed 6 packages, and audited 7 packages in 2s

3 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities



- Se creado el archivo test.js en la carpeta tests. 


- Se ha desarrollado el código de las pruebas API en test.js.


- Se ha modificado el script de ejecución de la prueba en el archivo package.json para que mocha ejecute el archivo test.js y saque un reporte.
...
"scripts": {
    "test": "mocha ./tests/test.js --reporter spec"
  }
...



- Se han ejecutado correctamente todas las consultas y visualizado los datos correspondientes en el terminal.

Comando usado: npm test

$ npm test

> qa-technical-task@1.0.0 test
> mocha ./tests/test.js --reporter spec



  API tests: 
    ✔ GetAllPlayers    
    ✔ GetSpecificPlayer
    ✔ GetAllTeams
    ✔ GetSpecificTeam
    ✔ GetAllGames    
    ✔ GetSpecificGame


  6 passing (82ms)

$ npm test

> qa-technical-task@1.0.0 test
> mocha ./tests/test.js --reporter spec



  API tests:     
    ✔ GetAllStats
    ✔ GetAverages


  2 passing (22ms)


  - Se ha adjuntado al proyecto una carpeta con evidencias de las ejecuciones de las pruebas.