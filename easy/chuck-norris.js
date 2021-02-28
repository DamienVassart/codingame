/*
The Goal

Binary with 0 and 1 is good, but binary with only 0, or almost, is even better! 
Originally, this is a concept designed by Chuck Norris to send so called unary messages.

Write a program that takes an incoming message as input and displays as output the message encoded using Chuck Norris’ method.

Rules
Here is the encoding principle:

- The input message consists of ASCII characters (7-bit)
- The encoded output message consists of blocks of 0
- A block is separated from another block by a space
- Two consecutive blocks are used to produce a series of same value bits (only 1 or 0 values):
 - First block: it is always 0 or 00. If it is 0, then the series contains 1, if not, it contains 0
 - Second block: the number of 0 in this block is the number of bits in the series

Game Input
Input
Line 1: the message consisting of N ASCII characters (without carriage return)

Output
The encoded message

Constraints
0 < N < 100
*/

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const MESSAGE = readline();

let binary = [...MESSAGE].map(c => c.charCodeAt(0).toString(2).padStart(7, 0)).join``;

let answer = binary.replace(/1{1}1*|0{1}0*/g, s => `${(/1/).test(s) ? `0 ${s.replace(/1/g, '0')}` : `00 ${s}`} `).trim()

console.log(answer);