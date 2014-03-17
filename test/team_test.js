var chai = require("chai");
var expect = chai.expect;
var assert = chai.assert;

var Team = require("../team");

describe("Team" , function() {
  var team;

  describe("properties", function() {
    it("name", function() {
      team = new Team({ name: 'Princeton' });
      expect(team).to.have.property('name').equal('Princeton');
    });
    it("conf", function() {
      team = new Team({ conf: 'IVY' });
      expect(team).to.have.property('conf').equal('IVY');
    });
    it("seed", function() {
      team = new Team({ seed: 15 });
      expect(team).to.have.property('seed').equal(15);
    });
    it("games_played", function() {
      team = new Team({ games_played: 21 });
      expect(team).to.have.property('games_played').equal(21);
    });
  });

  describe("bracketWins", function() {
    beforeEach(function() {
      team = new Team();
    });
    it("has no bracketWins", function() {
      expect(team).to.have.property('bracketWins').equal(0);
    });

    it("winsGame increments wins count", function() {
      team.winsGame();
      expect(team).to.have.property('bracketWins').equal(1);
      team.winsGame();
      expect(team).to.have.property('bracketWins').equal(2);
    });
  });
});
