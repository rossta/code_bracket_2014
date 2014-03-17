var chai = require("chai");
var expect = chai.expect;
var assert = chai.assert;

var Game = require("../game");

describe("Game" , function() {
  var game;

  describe("properties", function() {
    it("round", function() {
      game = new Game({ round: 5 });
      expect(game).to.have.property('round').equal(5);
    });
    it("date", function() {
      game = new Game({ date: new Date() });
      expect(game).to.have.property('date');
    });
  });
});
