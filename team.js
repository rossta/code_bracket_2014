var seeds, conferences;

function Team(attrs) {
  attributes = attrs || {}
  var self = this;
  this.bracketWins = 0;

  var props = "seed name conf games_played".split(' ');
  props.forEach(function(prop) {
    self[prop] = attributes[prop];
  });

}

Team.prototype.winsGame = function() {
  this.bracketWins += 1;
};

conferences = [
	"MWC",
	"MIDAM",
	"SEC",
	"SWAC",
	"AEAST",
	"PAT",
	"SOUTH",
	"PAC12",
	"BELT",
	"OVC",
	"BIG12",
	"MEAC",
	"ACC",
	"MVC",
	"WCC",
	"IVY",
	"NEA",
	"BIGE",
	"BIGW",
	"WAC",
	"BSOU",
	"MAAC",
	"LAND",
	"USA",
	"AAC",
	"HORIZ",
	"COL",
	"ATL10",
	"SUMM",
	"ASUN",
	"BSKY",
	"BIG10",
	"IND"
];

module.exports = Team;
