'use strict';
var Robot = function(startCharge) {
    this.startCharge = startCharge;
    this.positioncoord = [0, 0];
    this.histarr = [];
};
Robot.prototype.moveUp = function() {
    if (this.startCharge > 0) {
        this.positioncoord[1]++;
        this.histarr.push("up");
        this.startCharge--;
    }
};
Robot.prototype.moveLeft = function() {
    if (this.startCharge > 0) {
        this.positioncoord[0]--;
        this.histarr.push("left");
        this.startCharge--;

    }
};
Robot.prototype.history = function() {
    return this.histarr;
};
Robot.prototype.position = function() {

    return this.positioncoord;

};

Robot.prototype.battery = function() {

    //var level=this.startCharge;
    return this.startCharge;
};


module.exports = Robot;
