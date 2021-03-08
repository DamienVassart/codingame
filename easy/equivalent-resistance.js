/*
    Goal
Calculate the equivalent resistance of a circuit containing only resistors.

A resistor is a component used in electrical circuits. A resistor is quantified by its Resistance, which is measured in Ohms. We are interested in knowing the total resistance of a circuit of only resistors. There are two key definitions needed to determine the resistance of multiple resistors.

1. Series

The resistance of resistors in a line is equivalent to the sum of the resistance of those resistors.

    ---[R_1]---[R_2]---

Resistors in series will be noted with parentheses ( R_1 R_2 R_3 ... and so on ).

The resistance of a series arrangement is: R_eq = R_1 + R_2 + R_3 + ... and so on, where R_eq is the equivalent resistance of the series arrangement.

2. Parallel

The resistance of resistors in branching paths of the circuit is equal to 1 over the sum of 1 over the resistance of each branching path.

       +---[R_1]---+
       |           |
    ---+           +---
       |           |
       +---[R_2]---+


Resistors in parallel will be noted with brackets [ R_1 R_2 R_3 ... and so on ].

The resistance of resistors in parallel is R_eq = 1/(1/R_1 + 1/R_2 + 1/R_3 + 1/... and so on).

A branch can be treated as a single resistor by determining its equivalent resistance.

Example:

N = 3
A 24
B 8
C 48
[ ( A B ) [ C A ] ]

This will look something like this:

       +---[C]---+
       |         |
    +--+         +--+
    |  |         |  |
    |  +---[A]---+  |
    |               |
    +---[A]---[B]---+
    |               |
    +---[Battery]---+

[ ( A B ) [ C A ] ] => [ 24+8 1/(1/48+1/24) ] => [ 32 16 ] => 1/(1/32+1/16) => 32/3 => 10.666... => 10.7
Input
Line 1: An integer N for the number of unique resistors present in the circuit
Next N lines: A space separated name and the integer resistance R of a resistor
Last line: A space separated combination of parentheses, brackets, and names of resistors
Output
The equivalent resistance expressed as a float rounded to the nearest 0.1 Ohms.
Constraints
0 < N < 10
0 < R < 100
*/

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const series = arr => [arr.reduce((acc, val) => acc + val, 0)];

const parallel = arr => [1 / (arr.reduce((acc, val) => acc + (1 / val), 0))];

const N = parseInt(readline());

const VALUES = {};

for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const name = inputs[0];
    const R = parseInt(inputs[1]);
    VALUES[name] = R;
}

const input = readline();

const circuit = input.split(' ').map(e => VALUES.hasOwnProperty(e) ? VALUES[e] : e);

var stack = [];

for (let element of circuit) {
    if (!(/\)|\]/).test(element)) {
        stack.push(element);
    } else {
        let resistance = [];
        while(!isNaN(stack.slice(-1))) {
            resistance.push(stack.pop());
        }
        switch (stack.pop()) {
            case '(' :
                resistance = series(resistance);
                break;
            case '[' :
                resistance = parallel(resistance);
                break;
        }
        stack.push(resistance.pop());
    }
}

console.log(stack[0].toFixed(1));