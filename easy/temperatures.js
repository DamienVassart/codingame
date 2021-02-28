/*
Write a program that prints the temperature closest to 0 among input data. 
If two numbers are equally close to zero, positive integer has to be considered closest to zero 
(for instance, if the temperatures are -5 and 5, then display 5).

Game Input
Your program must read the data from the standard input and write the result on the standard output.

Input
Line 1: N, the number of temperatures to analyze
Line 2: A string with the N temperatures expressed as integers ranging from -273 to 5526

Output
Display 0 (zero) if no temperatures are provided. Otherwise, display the temperature closest to 0.

Constraints
0 ≤ N < 10000
*/

const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');

var temp = [], result;

for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
    if (Math.abs(t) === Math.min(...inputs.map(e => Math.abs(e)))) temp.push(t);
}

result = n === 0 ? 0 : Math.max(...temp);
console.log(result);