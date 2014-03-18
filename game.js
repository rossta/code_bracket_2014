function Game(attrs) {
  attributes = attrs || {}
  var self = this;

  var defaults = { round: 0 };

  var props = "round date".split(' ');
  props.forEach(function(prop) {
    self[prop] = attributes[prop] || defaults[prop];
  });
}

module.exports = Game;
