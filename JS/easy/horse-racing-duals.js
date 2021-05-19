/*
Casablanca’s hippodrome is organizing a new type of horse racing: duals. 
During a dual, only two horses will participate in the race. 
In order for the race to be interesting, it is necessary to try to select two horses with similar strength.

Write a program which, using a given number of strengths, identifies the two closest strengths and shows their difference with an integer (≥ 0).

Game Input
Input
Line 1: Number N of horses

The N following lines: the strength Pi of each horse. Pi is an integer.

Output
The difference D between the two closest strengths. D is an integer greater than or equal to 0.

Constraints
1 < N  < 100000
0 < Pi ≤ 10000000
*/

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());
var strengths = [];

for (let i = 0; i < N; i++) {
    const pi = parseInt(readline());
    strengths.push(pi);
}

strengths.sort((x, y) => x - y);

var diff = strengths.map((e, i, arr) => Math.abs(e - arr[i + 1])).filter(e => !isNaN(e));

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(Math.min(...diff));