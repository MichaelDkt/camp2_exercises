const orangeTree = require("./03_orange_tree.js");

describe("age", function() {
  test("3 ans", function() {
    orangeTree.seed();
    for(let i=0; i<3; i++) {
      orangeTree.ageOneYear();}
    expect(orangeTree.height).toBe(25*3);
    expect(orangeTree.alive).toBeTruthy();
    expect(orangeTree.oranges).toBe(0);
  });
  test("8 ans", function() {
    orangeTree.seed();
    for(let i=0; i<8; i++) {
      orangeTree.ageOneYear();}
    expect(orangeTree.height).toBe(25*8);
    expect(orangeTree.alive).toBeTruthy();
    expect(orangeTree.oranges).toBe(10);
  });
  test("15 ans", function() {
    orangeTree.seed();
    for(let i=0; i<15; i++) {
      orangeTree.ageOneYear();}
    expect(orangeTree.height).toBe(25*9+6*10);
    expect(orangeTree.alive).toBeTruthy();
    expect(orangeTree.oranges).toBe(20);
  });
  test("25 ans", function() {
    orangeTree.seed();
    for(let i=0; i<25; i++) {
      orangeTree.ageOneYear();}
    expect(orangeTree.height).toBe(25*9+10*10);
    expect(orangeTree.alive).toBeTruthy();
    expect(orangeTree.oranges).toBe(5);
  });
  test("49 ans", function() {
    orangeTree.seed();
    for(let i=0; i<49; i++) {
      orangeTree.ageOneYear();}
    expect(orangeTree.height).toBe(25*9+10*10);
    expect(orangeTree.alive).toBeTruthy
    ();
    expect(orangeTree.oranges).toBe(0);
  });
  test("101 ans", function() {
    orangeTree.seed();
    for(let i=0; i<101; i++) {
      orangeTree.ageOneYear();}
    expect(orangeTree.height).toBe(25*9+10*10);
    expect(orangeTree.alive).not.toBeTruthy();
    expect(orangeTree.oranges).toBe(0);
  });
  test("reset", function() {
    orangeTree.seed();
    expect(orangeTree.age).toBe(0);
    expect(orangeTree.height).toBe(0);
    expect(orangeTree.alive).toBeTruthy();
    expect(orangeTree.oranges).toBe(0);
  });
});

describe("pick an orange", function() {
  test("3 ans", function() {
    orangeTree.seed();
    for(let i=0; i<3; i++) {
      orangeTree.ageOneYear();}
    expect(orangeTree.pickAnOrange()).not.toBeTruthy();
  });
  test("7 ans", function() {
    orangeTree.seed();
    for(let i=0; i<7; i++) {
      orangeTree.ageOneYear();}
    expect(orangeTree.pickAnOrange()).toBeTruthy();
  });
  test("42 ans", function() {
    orangeTree.seed();
    for(let i=0; i<42; i++) {
      orangeTree.ageOneYear();}
    expect(orangeTree.pickAnOrange()).not.toBeTruthy();
  });
});
