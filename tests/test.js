// Librería node-fetch
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// Endpoints
const players='https://www.balldontlie.io/api/v1/players/';
const player='https://www.balldontlie.io/api/v1/players/<ID>';
const teams='https://www.balldontlie.io/api/v1/teams';
const team='https://www.balldontlie.io/api/v1/teams/<ID>';
const games='https://www.balldontlie.io/api/v1/games';
const game='https://www.balldontlie.io/api/v1/games/<ID>';
const stats='https://www.balldontlie.io/api/v1/stats';
const averages='https://www.balldontlie.io/api/v1/season_averages';


// Conjunto de pruebas API
describe('API tests: ', function() {
  // Test GetAllPlayers
  it('GetAllPlayers', function(){
    // Fetch consulta los datos del endpoint
    fetch(players)
      .then(res => res.json())
      .then(out =>
        // Se imprimen los datos por consola
        console.log('GetAllPlayers', out))
      .catch(err => {throw err});
  });

  // Test GetSpecificPlayer
  it('GetSpecificPlayer', function(){
    fetch(player.replace('<ID>','237'))
      .then(res => res.json())
      .then(out =>
        console.log('GetSpecificPlayer', out))
      .catch(err => {throw err});
  });

  // Test GetAllTeams
  it('GetAllTeams', function(){
    fetch(teams)
      .then(res => res.json())
      .then(out =>
        console.log('GetAllTeams', out))
      .catch(err => {throw err});
  });

  // Test GetSpecificTeam
  it('GetSpecificTeam', function(){
    fetch(team.replace('<ID>','14'))
      .then(res => res.json())
      .then(out =>
        console.log('GetSpecificTeam', out))
      .catch(err => {throw err});
  });

  // Test GetAllGames
  it('GetAllGames', function(){
    fetch(games)
      .then(res => res.json())
      .then(out =>
        console.log('GetAllGames', out))
      .catch(err => {throw err});
  });

  // Test GetSpecificGame
  it('GetSpecificGame', function(){
    fetch(game.replace('<ID>','48739'))
      .then(res => res.json())
      .then(out =>
        console.log('GetSpecificGame', out))
      .catch(err => {throw err});
  });

  // Test GetAllStats
  it('GetAllStats', function(){
    fetch(stats)
      .then(res => res.json())
      .then(out =>
        console.log('GetAllStats', out))
      .catch(err => {throw err});
  });

  // Test GetAverages
  it('GetAverages', function(){
    fetch(averages)
      .then(res => res.json())
      .then(out =>
        console.log('GetAverages', out))
      .catch(err => {throw err});
  });

  
});