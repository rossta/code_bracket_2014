function Game(attrs) {
  attributes = attrs || {}
  var self = this;

  var props = "round date".split(' ');
  props.forEach(function(prop) {
    self[prop] = attributes[prop];
  });
}

module.exports = Game;
