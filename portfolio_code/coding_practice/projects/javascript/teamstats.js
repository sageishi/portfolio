const team = {
  _players: [
    {
      firstName: 'Elias',
      lastName: 'Pettersson',
      age: 21
    },
    {
      firstName: 'Bo',
      lastName: 'Horvat',
      age: 25
    },
    {
      firstName: 'Jake',
      lastName: 'Virtanen',
      age:23
    },
  ],
  _games: [
    {
      opponent: 'Islanders',
      teamPoints: 5,
      opponentPoints: 4
    },
    {
      opponent: 'Blue Jackets',
      teamPoints: 1,
      opponentPoints: 2
    },
    {
      opponent: 'Avalanche',
      teamPoints: 6,
      opponentPoints: 3
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    return this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
    return this._games.push(game);
  },
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('Coyotes', 2, 4);
team.addGame('Blue Jackets', 3, 5);
team.addGame('Maple Leafs', 2, 4);
console.log(team.games);