'use strict';

var Robot = function (startCharge) {

  this.charge = startCharge;
  this.myLoc = [0,0];
  this.hasDone = [];

  this.battery = function() {

    return this.charge;
  };

  this.moveUp = function() {

    if (this.charge > 0) {

      this.myLoc[1]++;
      this.hasDone.push('up');
      this.charge--;
    }
  };

  this.moveDown = function() {

    if (this.charge > 0) {

      this.myLoc[1]--;
      this.hasDone.push('down');
      this.charge--;
    }
  };

  this.moveLeft = function() {

    if (this.charge > 0) {

      this.myLoc[0]--;
      this.hasDone.push('left');
      this.charge--;
    }
  };

  this.moveRight = function() {

    if (this.charge > 0) {

      this.myLoc[0]++;
      this.hasDone.push('right');
      this.charge--;
    }
  };

  this.history = function() {

    return this.hasDone;
  };
};

Robot.prototype.position = function() {

  return this.myLoc;
};

module.exports = Robot;
