/*
Goal
Your adventure path led you to an inn in a small, forgotten town somewhere to the North of Golem Hills.
After gulping the last drop from the 9th mug of elf wine a shady old man materializes out of nowhere, in-front of you.
You start to doubt the wine.
The old man (throwing a pack of old maps on the table): Do you want to earn some good coins?
You (without looking at him): I've enough for food and wine!
The old man: What about a whole inn...!
You: Hm...
The old man: Yeees and you'll get the glory of being the first one to get to this treasure!
You (looking at the bunch of maps): But they look the same!?
The old man: Or do they, you must choose wisely.
The voice of the old man (from nowhere): Ah right, one more thing, beware of the Dragons!
You grab your staff and sword, swallow one more whole mug of wine:
Well, it's glory time!

You are given N maps for a dungeon. Each map may contain a path to a treasure T, from starting position [ startRow; startCol ]. Determine the index of the map which holds the shortest path from the starting position to T, but be careful a map may lead you to a TRAP.

A path is marked on the map with ^, v, <, > symbols, each corresponding to UP, DOWN, LEFT, RIGHT directions respectively, i.e. each symbol shows you the next cell to move on.

A valid path must start from [ startRow; startCol ] and end on T.

The path length is the count of direction symbols plus 1, for the T cell.

Example:
W = 4 H = 4
startRow = 1 startCol = 1
N = 3

Maps:
0
.>>v
.^#v
..#v
...T

1
....
.v#.
.v#.
.>>T

2
....
v<#.
v.#.
..>T


In the above example map 2 does not contain a valid path from [1; 1] to T, map 0 contains a valid path with length 7 (the count of the direction symbols + T) and map 1 contains a valid path with length 5, so the answer is 1.
Input
Line 1: Width W and height H of the maps
Line 2: startRow and startCol for the starting position on the map
Line 3: An integer N for the number of maps to check
N * H Lines: Each H consecutive lines are representing a single map. Each line contains W characters representing a row of a map.

Characters can be:
. - Empty square
# - Wall
^ - Move UP
v - Move DOWN
< - Move LEFT
> - Move RIGHT
T - The treasure square
Output
index of the map with the shortest path. If there isn't a map with valid path from [ startRow; startCol ] to T output TRAP.
Constraints
There is always a T on the maps.
If there are maps with valid path from [ startRow; startCol ] to T only one map holds the shortest path.
The given maps are representing the same dungeon, but the position for T may differ.
0 < N < 10
2 < W, H < 20
*/

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

const explore = map => map.status ? map : explore(move(map));

var inputs = readline().split(' '); 
const w = parseInt(inputs[0]); 
const h = parseInt(inputs[1]); 

var inputs = readline().split(' '); 
const startRow = parseInt(inputs[0]); 
const startCol = parseInt(inputs[1]); 

const n = parseInt(readline()); 

var maps = [];

for (let i = 0; i < n; i++) {
    let map = [];
    for (let j = 0; j < h; j++) {
        const mapRow = readline();
        map.push([...mapRow]);
    }
    maps.push({path: map, row: startRow, col: startCol, steps: 0, status: undefined});
}

const shortest = Math.min(...maps.map(map => explore(map).status == 'TREASURE' ? map.steps : w * h));

console.log(maps.every(map => map.status == 'TRAP') ? 'TRAP' : maps.findIndex(map => map.steps == shortest));