/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const move = (map) => {
    if (map.steps++ > w * h) map.status = 'TRAP';
    switch(map.path[map.row][map.col]) {
        case '^' :
            map.row--;
            break;
        case 'v' :
            map.row++;
            break;
        case '<' :
            map.col--;
            break;
        case '>' :
            map.col++;
            break;
        case 'T' :
            map.status = 'TREASURE';
            break;
        default :
            map.status = 'TRAP';
            break;
    }
    return map;
};

const explore = (map) => {
    if (map.status) return map;
    return map = explore(move(map));
}

var inputs = readline().split(' '); 
const w = parseInt(inputs[0]); 
const h = parseInt(inputs[1]); 

var inputs = readline().split(' '); 
const startRow = parseInt(inputs[0]); 
const startCol = parseInt(inputs[1]); 

const n = parseInt(readline()); 

var maps = [];

for (let i = 0; i < n; i++) {
    var map = [];
    for (let j = 0; j < h; j++) {
        const mapRow = readline();
        map.push([...mapRow]);
    }
    maps.push({path: map, row: startRow, col: startCol, steps: 0, status: undefined});
}

var shortest = Math.min(...maps.map(map => explore(map).status == 'TREASURE' ? map.steps : w * h));

console.log(maps.every(map => map.status == 'TRAP') ? 'TRAP' : maps.findIndex(map => map.steps == shortest));