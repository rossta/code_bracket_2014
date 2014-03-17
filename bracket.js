module.exports = function(game, team1, team2) {
  switch(game.round) {
    case 1:
      round1(team1, team2);
      break;
    default:
      betterSeed(team1, team2);
      break;
  }

  function betterSeed(team1, team2) {
    if (team1.seed > team2.seed) {
      team2.winsGame();
    } else {
      team1.winsGame();
    }
  }

  function favorSeed(team1, team2, seed) {
    if (team1.seed === seed) { team1.winsGame(); return team1; }
    if (team2.seed === seed) { team2.winsGame(); return team2; }
    return false;
  }

  function randomByPercentAndSeed(team1, team2, seed1, seed2, percent) {
    if (team1.seed === seed1 && team2.seed === seed2) { return weighted(team1, team2, percent); }
    if (team2.seed === seed1 && team1.seed === seed2) { return weighted(team1, team2, percent); }
    return false;
  };

  function randomByPercent(team1, team2, percent) {
    if (Math.ramdom() <= percent) {
      team1.winsGame();
    } else {
      team2.winsGame();
    }
    return true;
  }

  function round1(team1, team2) {
    if (favorSeed(team1, team2, 1)) return;
    if (randomByPercentAndSeed(team1, team2, 5, 12, .5)) return;
    betterSeed(team1, team2);
  }

}

