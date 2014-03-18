var bracket;

bracket = (function() {
  var bracket = function(game, team1, team2) {
    var rules;
    rules = { team1: [], team2: [] };

    function Rule(name, team1, team2, round, options) {
      this.name  = name;
      this.team1 = team1;
      this.team2 = team2;
      this.round = round;
      this.match  = options.match || function() { return true; };
      this.weight = options.weight || function() { return 0.5; };
    }

    function addRule(name, options) {
      options = options || {};
      rules.team1.push(new Rule(name, team1, team2, game.round, options));
      rules.team2.push(new Rule(name, team2, team1, game.round, options));
    }

    function findMatch(teamRules) {
      var rule;
      for(var i = 0; i < teamRules.length; i++) {
        rule = teamRules[i];
        if (rule.match()) { return rule; }
      }
    }

    addRule('No.1 seed probability', {
      match: function() {
        return this.team1.seed === 1;
      },
      weight: function() {
        return [1.0, 1.0, 1.0, 1.0, 1.0][this.round];
      }
    });

    addRule('Higher seed wins', {
      match: function() {
        return this.team1.seed < this.team2.seed;
      },
      weight: function() {
        return 0.75;
      }
    });

    addRule('Default rule');

    weight1 = findMatch(rules.team1).weight();
    weight2 = findMatch(rules.team2).weight();

    if (weight1 >= weight2) {
      team1.winsGame();
    } else {
      team2.winsGame();
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

  return bracket;

})();

module.exports = bracket;
