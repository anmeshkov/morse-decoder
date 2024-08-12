const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    const arr = [];
  
    // разбиваем строку на массив по 10 имволов
    for (let i = 0; i < expr.length; i += 10) {
      const chunk = expr.slice(i, i + 10);
  
      // если 10 символов это звездочки, то пушим пробел
      if (chunk === "**********") {
        arr.push(" ");
      } else {
        // иначе разбиваем подстроку из 10 символов на массви по 2 символоа
        const codeString = [];
        for (let j = 0; j < chunk.length; j += 2) {
          codeString.push(chunk.slice(j, j + 2));
        }
  
        // по ключу ищем символ
        const string = codeString.map(el => {
          if (el === '00') return ''
          if (el === '10') return '.'
          if (el === '11') return '-'
        }).join('')
  
        arr.push(MORSE_TABLE[string]);
  
      }
    }
    
    return arr.join('');
  }

module.exports = {
    decode
}