/*
 	Goal
There is a rectangle of given width w and height h,

On the width side, you are given a list of measurements.
On the height side, you are given another list of measurements.

Draw perpendicular lines from the measurements to partition the rectangle into smaller rectangles.

In all sub-rectangles (include the combinations of smaller rectangles), how many of them are squares?


Example

w = 10
h = 5
measurements on x-axis: 2, 5
measurements on y-axis: 3

   ___2______5__________ 
  |   |      |          |
  |   |      |          |
 3|___|______|__________|
  |   |      |          |
  |___|______|__________|

Number of squares in sub-rectangles = 4 (one 2x2, one 3x3, two 5x5)
Input
Line 1: Integers w h countX countY, separated by space
Line 2: list of measurements on the width side, countX integers separated by space, sorted in asc order
Line 3: list of measurements on the height side, countY integers separated by space, sorted in asc order
Output
Line 1: the number of squares in sub-rectangles created by the added lines
Constraints
1 ≤ w, h ≤ 20,000
1 ≤ number of measurements on each axis ≤ 500
*/

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');

const w = parseInt(inputs[0]);
const h = parseInt(inputs[1]);
const countX = parseInt(inputs[2]);
const countY = parseInt(inputs[3]);

var inputs = readline().split(' ');
var xMeasurements = [0, w];
for (let i = 0; i < countX; i++) {
    const x = parseInt(inputs[i]);
    xMeasurements.splice((i+1), 0, x);
}

var inputs = readline().split(' ');
var yMeasurements = [0, h];
for (let i = 0; i < countY; i++) {
    const y = parseInt(inputs[i]);
    yMeasurements.splice((i+1), 0, y);
}

var xLengths = [], yLengths = [];

xMeasurements.forEach((x, i, arr) => {
    arr.slice(i+1).map(e => xLengths.push(e - x));
});

yMeasurements.forEach((y, i, arr) => {
    arr.slice(i+1).map(e => yLengths.push(e - y));
});

var squares = 0;

xLengths.map(x => squares += yLengths.filter(y => y == x).length);

console.log(squares);