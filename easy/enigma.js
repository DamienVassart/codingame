/*
Goal
During World War II, the Germans were using an encryption code called Enigma – which was basically an encryption machine that encrypted messages for transmission. The Enigma code went many years unbroken. Here's How the basic machine works:

First Caesar shift is applied using an incrementing number:
If String is AAA and starting number is 4 then output will be EFG.
A + 4 = E
A + 4 + 1 = F
A + 4 + 1 + 1 = G

Now map EFG to first ROTOR such as:
ABCDEFGHIJKLMNOPQRSTUVWXYZ
BDFHJLCPRTXVZNYEIWGAKMUSQO
So EFG becomes JLC. Then it is passed through 2 more rotors to get the final value.

If the second ROTOR is AJDKSIRUXBLHWTMCQGZNPYFVOE, we apply the substitution step again thus:
ABCDEFGHIJKLMNOPQRSTUVWXYZ
AJDKSIRUXBLHWTMCQGZNPYFVOE
So JLC becomes BHD.

If the third ROTOR is EKMFLGDQVZNTOWYHXUSPAIBRCJ, then the final substitution is:
ABCDEFGHIJKLMNOPQRSTUVWXYZ
EKMFLGDQVZNTOWYHXUSPAIBRCJ
So BHD becomes KQF.

Final output is sent via Radio Transmitter.
Input
Line 1: ENCODE or DECODE
Line 2: Starting shift N
Lines 3-5:
BDFHJLCPRTXVZNYEIWGAKMUSQO ROTOR I
AJDKSIRUXBLHWTMCQGZNPYFVOE ROTOR II
EKMFLGDQVZNTOWYHXUSPAIBRCJ ROTOR III
Line 6: Message to Encode or Decode
Output
Encoded or Decoded String
Constraints
0 ≤ N < 26
Message consists only of uppercase letters (A-Z)
1 ≤ Message length < 50
*/

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const alphabet = [...new Array(26).keys()].map((_, i) => String.fromCharCode(i+65));

const caesarMap = (str, n) => {
    return [...str].reduce((cipherText, l, i) => {
        const cipher = alphabet.indexOf(l) + (n + Math.sign(n) * i) % 26;
        return cipherText += (alphabet[cipher >= 0 ? cipher % 26 : 26 + cipher]);
    }, '');
};

const rotorMap = (str, target, source) => {
    return [...str].map(l => target[source.indexOf(l)]).join``;
};

const encode = (plainText) => {
    let cipherText = caesarMap(plainText, pseudoRandomNumber);
    for (let rotor of rotors) {
        cipherText = rotorMap(cipherText, rotor, alphabet);
    }
    return cipherText;
};

const decode = (cipherText) => {
    for (let rotor of rotors.reverse()) {
        cipherText = rotorMap(cipherText, alphabet, rotor);
    }
    return caesarMap(cipherText, -pseudoRandomNumber);
};

const operation = readline();

const pseudoRandomNumber = parseInt(readline());

var rotors = [];

for (let i = 0; i < 3; i++) {
    const rotor = readline();
    rotors.push([...rotor]);
}

const message = readline();

switch (operation) {
    case 'ENCODE' : 
        console.log(encode(message));
        break;
    case 'DECODE' :
        console.log(decode(message));
        break;
}