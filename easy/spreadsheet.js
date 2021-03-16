/*
Goal
You are given a 1-dimensional spreadsheet. You are to resolve the formulae and give the value of all its cells.

Each input cell's content is provided as an operation with two operands arg1 and arg2.

There are 4 types of operations:
VALUE arg1 arg2: The cell's value is arg1, (arg2 is not used and will be "_" to aid parsing).
ADD arg1 arg2: The cell's value is arg1 + arg2.
SUB arg1 arg2: The cell's value is arg1 - arg2.
MULT arg1 arg2: The cell's value is arg1 × arg2.

Arguments can be of two types:
• Reference $ref: If an argument starts with a dollar sign, it is a interpreted as a reference and its value is equal to the value of the cell by that number ref, 0-indexed.
For example, "$0" will have the value of the result of the first cell.
Note that a cell can reference a cell after itself!

• Value val: If an argument is a pure number, its value is val.
For example: "3" will have the value 3.

There won't be any cyclic references: a cell that reference itself or a cell that references it, directly or indirectly.
Input
Line 1: An integer N for the number of cells.
Next N lines: operation arg1 arg2

operation is one of { VALUE, ADD, SUB, MULT }
arg1 and arg2 are either a number ("-?[0-9]+"), a reference ("\$[0-9]+") or nothing "_".
Output
N lines: the value of each cell, one value per line, from cell 0 to cell N
Constraints
1 ≤ N ≤ 100
-10000 ≤ val ≤ 10000
$0 ≤ $ref ≤ $(N-1)
val ∈ ℤ
ref ∈ ℕ
There are no cyclic references.
*/

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const OPERATIONS = {
    'ADD' : '+',
    'SUB' : '-',
    'MULT' : '*'
};

const N = parseInt(readline());

const spreadsheet = [];

for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    spreadsheet.push({id: i, operation: inputs[0], arg1: inputs[1], arg2: inputs[2], value: null});
}

const parser = arg => arg.slice(0,1) === '$' ? calc(spreadsheet[+arg.slice(1)]) : +arg;

function calc(cell) {
    if (cell.value !== null) return cell.value;
    return cell.value = cell.operation == 'VALUE' ? parser(cell.arg1) : eval(`${parser(cell.arg1)} ${OPERATIONS[cell.operation]} ${parser(cell.arg2)}`);
}

spreadsheet.map(cell => console.log(calc(cell)+''));