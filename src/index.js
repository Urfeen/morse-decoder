const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let count = 0;
    let arr = [];
    let item = '';
    let i = 1;
    while (i <= expr.length + 2) {
        if (count != 5) {
            count++;
            if (parseInt(expr[i - 1] + expr[i]) == 10) item += '.'
            else if (parseInt(expr[i - 1] + expr[i]) == 11) item += '-';
            else if (expr[i - 1] + expr[i] == '**') item += '*';
            i += 2;
        } else {
            if (item == '*****') arr.push(' ');
            else arr.push(MORSE_TABLE[item]);
            count = 0;
            item = '';
        }
    }
    return arr.join('');
}

module.exports = {
    decode
}