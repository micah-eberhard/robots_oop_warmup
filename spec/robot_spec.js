'use strict';

var Robot = require('../robot');

describe('Robot', function() {

  it('starts off at position 0,0 and the battery power given', function() {
    var robot = new Robot(17);

    expect(robot.position()).toEqual([0,0]);

    expect(robot.battery()).toEqual(17);
  });

  it("can move up", function () {
    var robot = new Robot(8);
    robot.moveUp();
    expect(robot.position()).toEqual([0, 1]);

    robot.moveUp();
    expect(robot.position()).toEqual([0, 2]);
  });

  it("can move left", function () {
    var robot = new Robot(8);
    robot.moveLeft();
    expect(robot.position()).toEqual([-1, 0]);

    robot.moveLeft();
    expect(robot.position()).toEqual([-2, 0]);
  });

  it("can record their history", function () {
    var robot = new Robot(8);
    expect(robot.history()).toEqual([]);

    robot.moveLeft();
    expect(robot.history()).toEqual(["left"]);

    robot.moveUp();
    expect(robot.history()).toEqual(["left", "up"]);
  });

  it("can only make one move per battery charge, at 0 it will no longer move.", function () {
    var robot = new Robot(3);
    expect(robot.battery()).toEqual(3);

    robot.moveLeft();
    expect(robot.battery()).toEqual(2);

    robot.moveUp();
    expect(robot.battery()).toEqual(1);

    robot.moveUp();
    expect(robot.battery()).toEqual(0);

    robot.moveUp();
    expect(robot.position()).toEqual([-1, 2]);
  });

});
