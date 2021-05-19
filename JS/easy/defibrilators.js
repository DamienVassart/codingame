/*
The Goal
The city of Montpellier has equipped its streets with defibrillators to help save victims of cardiac arrests. 
The data corresponding to the position of all defibrillators is available online.

Based on the data we provide in the tests, write a program that will allow users to find the defibrillator nearest to their location using their mobile phone.

Rules
The input data you require for your program is provided in text format.
This data is comprised of lines, each of which represents a defibrillator. Each defibrillator is represented by the following fields:

- A number identifying the defibrillator
- Name
- Address
- Contact Phone number
- Longitude (degrees)
- Latitude (degrees)
These fields are separated by a semicolon (;).

Beware: the decimal numbers use the comma (,) as decimal separator. 
Remember to turn the comma (,) into dot (.) if necessary in order to use the data in your program.

The program will display the name of the defibrillator located the closest to the user’s position. 
This position is given as input to the program.

Game Input
Input
Line 1: User's longitude (in degrees)

Line 2: User's latitude (in degrees)

Line 3: The number N of defibrillators located in the streets of Montpellier

N next lines: a description of each defibrillator

Output
The name of the defibrillator located the closest to the user’s position.

Constraints
0 < N < 10000
*/

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const LON = readline();
const LAT = readline();
const N = parseInt(readline());

const num = str => +str.replace(/,/g, '.');

const dist = (longA, longB, latA, latB) => {
    const x = (longB - longA) * Math.cos((latA + latB) / 2);
    const y = latB - latA;
    return Math.sqrt(x**2 + y**2) * 6371;
}

var longitude = num(LON);
var latitude = num(LAT);
var names = [];
var coordinates = [];

for (let i = 0; i < N; i++) {
    const DEFIB = readline();
    names.push(DEFIB.split(';')[1]);
    coordinates.push(DEFIB.split(';').slice(4).map(e => num(e)));
}

var distances = coordinates.map(coord => dist(longitude, coord[0], latitude, coord[1]));
var i = distances.indexOf(Math.min(...distances));

console.log(names[i]);