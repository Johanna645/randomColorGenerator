const randomColor = require('randomcolor'); // import the script

const chalk = require('chalk'); // library for the colouring of the texts

console.log(process.argv[2]);
const input = process.argv[2];
const color = randomColor({ hue: input });
console.log(color);

function drawLongLine() {
  let longStringOfHashtags = '';
  let i = 0;
  do {
    longStringOfHashtags = longStringOfHashtags + '#';
    i++;
  } while (i < 31);

  console.log(longStringOfHashtags);
}

function drawShortLine() {
  let shortStringOfHashtags = '';
  let a = 0;
  do {
    if (a < 5 || a >= 26) {
      shortStringOfHashtags = shortStringOfHashtags + '#';
    } else {
      shortStringOfHashtags = shortStringOfHashtags + ' ';
    }
    a++;
  } while (a < 31);

  console.log(shortStringOfHashtags);
}

function drawSpecialLine() {
  let specialString = '';
  let b = 0;
  do {
    if (b < 5 || b >= 26) {
      specialString = specialString + '#';
    } else if (b >= 5 || b < 12 || b >= 19 || b < 26) {
      specialString = specialString + ' ';
    } else {
      for (let i = 0; i < color.length; i++) {
        const character = color[i];
        specialString = specialString + character;
      }
      // how do i get the color here? character at a time, string length color [0]
    }
    b++;
  } while (b < 31);
}

drawLongLine();
drawLongLine();
drawLongLine();
drawShortLine();

drawSpecialLine();

drawShortLine();
drawLongLine();
drawLongLine();
drawLongLine();
