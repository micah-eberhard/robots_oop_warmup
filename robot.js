'use strict';

var Robot = function (startCharge) {
  this.charge = startCharge;
  this.location = [0,0];
  this.moves = [];
  this.history = function () {
    return this.moves;
  }
  this.battery = function() {
    return this.charge;
  }
  this.moveUp = function() {
    if (this.charge > 0) {
      this.location[1]++;
      this.moves.push('up');
      this.charge--;
    }
  }
  this.moveLeft = function() {
    if (this.charge > 0) {
      this.location[0]--;
      this.moves.push('left');
      this.charge--;
    }
  }
};


Robot.prototype.position = function() {
  return this.location;
};

module.exports = Robot;
