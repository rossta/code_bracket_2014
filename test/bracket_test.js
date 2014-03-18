var chai = require("chai");
var expect = chai.expect;
var assert = chai.assert;
var utils  = chai.utils;

var bracket = require("../bracket");
var Team = require("../team");
var Game = require("../game");

chai.use(function(_chai, utils) {
  chai.Assertion.addMethod('toHaveWon', function() {
    var obj = utils.flag(this, 'object');
    new chai.Assertion(obj).to.have.property('bracketWins').equal(1);
  });
  chai.Assertion.addMethod('toHaveLost', function() {
    var obj = utils.flag(this, 'object');
    new chai.Assertion(obj).to.have.property('bracketWins').equal(0);
  });
});

describe("Bracket" , function() {
  var game, team1, team2;

  beforeEach(function() {
    game  = new Game({ round: 0 });
    team1 = new Team();
    team2 = new Team();
  });

  describe("Round 1", function() {
    beforeEach(function() {
      game.round = 0;
    });
    it('favors team1 No. 1 seed in Round 1', function() {
      team1.seed = 1, team2.seed = 2;
      bracket(game, team1, team2);
      expect(team1).toHaveWon();
      expect(team2).toHaveLost();
    });

    it('favors team2 No. 1 seed in Round 1', function() {
      team2.seed = 1; team1.seed = 2;
      bracket(game, team1, team2);
      expect(team2).toHaveWon();
      expect(team1).toHaveLost();
    });
  });

  describe("Otherwise", function() {
    it('higher seed team 1 wins', function() {
      team1.seed = 2, team2.seed = 3;
      bracket(game, team1, team2);
      expect(team1).toHaveWon();
      expect(team2).toHaveLost();
    });
    it('higher seed team 2 wins', function() {
      team2.seed = 2, team1.seed = 3;
      bracket(game, team1, team2);
      expect(team2).toHaveWon();
      expect(team1).toHaveLost();
    });
  });
});
