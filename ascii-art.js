/*
Rules
ASCII art allows you to represent forms by using characters. To be precise, in our case, these forms are words. For example, the word "MANHATTAN" could be displayed as follows in ASCII art:

 
# #  #  ### # #  #  ### ###  #  ###
### # # # # # # # #  #   #  # # # #
### ### # # ### ###  #   #  ### # #
# # # # # # # # # #  #   #  # # # #
# # # # # # # # # #  #   #  # # # #
 
​Your mission is to write a program that can display a line of text in ASCII art in a style you are given as input.

Game Input

Input
Line 1: the width L of a letter represented in ASCII art. All letters are the same width.

Line 2: the height H of a letter represented in ASCII art. All letters are the same height.

Line 3: The line of text T, composed of N ASCII characters.

Following lines: the string of characters ABCDEFGHIJKLMNOPQRSTUVWXYZ? Represented in ASCII art.

Output
The text T in ASCII art.
The characters a to z are shown in ASCII art by their equivalent in upper case.
The characters that are not in the intervals [a-z] or [A-Z] will be shown as a question mark in ASCII art.

Constraints
0 < L < 30
0 < H < 30
0 < N < 200
*/

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const L = parseInt(readline()); // Width of a letter
const H = parseInt(readline()); // Height of a letter
const T = readline(); // Line of text to display, with N ASCII characters

var charCodes = [...T.replace(/[^a-zA-Z]/g, '?').toUpperCase()].map(c => c !== '?' ? (c.charCodeAt(0) - 65) * L : 26 * L);
var rows = [];

for (let i = 0; i < H; i++) {
    const ROW = readline();
    rows.push(ROW);
}

for(let i = 0; i < rows.length; i++) {
    let answer = '';
    for (let j = 0; j < charCodes.length; j++) {
        answer += rows[i].slice(charCodes[j], charCodes[j] + L);
    }
    console.log(answer);
}