/*
The Goal
MIME types are used in numerous internet protocols to associate a media type (html, image, video ...) with the content sent. 
The MIME type is generally inferred from the extension of the file to be sent.
You have to write a program that makes it possible to detect the MIME type of a file based on its name.

Rules
You are provided with a table which associates MIME types to file extensions. 
You are also given a list of names of files to be transferred and for each one of these files, you must find the MIME type to be used.
The extension of a file is defined as the substring which follows the last occurrence, if any, of the dot character within the file name.
If the extension for a given file can be found in the association table (case insensitive, e.g. TXT is treated the same way as txt), 
then print the corresponding MIME type. 
If it is not possible to find the MIME type corresponding to a file, or if the file doesn’t have an extension, print UNKNOWN.

Game Input

Input
Line 1: Number N of elements which make up the association table.

Line 2: Number Q of file names to be analyzed.

N following lines: One file extension per line and the corresponding MIME type (separated by a blank space).

Q following lines: One file name per line.

Output

For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.

Constraints
0 < N < 10000
0 < Q < 10000

- File extensions are composed of a maximum of 10 alphanumerical ASCII characters.
- MIME types are composed of a maximum 50 alphanumerical and punctuation ASCII characters.
- File names are composed of a maximum of 256 alphanumerical ASCII characters and dots (full stops).
- There are no spaces in the file names, extensions or MIME types.
*/

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed. 
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const EXT = inputs[0]; // file extension
    const MT = inputs[1]; // MIME type.
    fileExtensions.push(EXT.toLowerCase());
    mimeTypes.push(MT);
}
for (let i = 0; i < Q; i++) {
    const FNAME = readline(); // One file name per line.
    files.push(FNAME.toLowerCase());
}

let fileExtensions = [];
let mimeTypes = [];
let files = [];
let result = '';

for (let file of files) {
    let ext = file.split('.'); 
    if (ext.length < 2) result += 'UNKNOWN\n';
    else {
        let x = fileExtensions.indexOf(ext.pop());
        result += ((x === -1) ? 'UNKNOWN' : mimeTypes[x]) + '\n';
    }
}

// For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.
console.log(result);