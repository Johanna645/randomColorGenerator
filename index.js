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

  console.log(chalk.hex(color)(longStringOfHashtags));
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

  console.log(chalk.hex(color)(shortStringOfHashtags));
}

function drawLineWithColor() {
  let stringWithColor = '';
  let stringWithHashtag = '';
  let stringEmpty = '';

  for (let i = 0; i < 5; i++) {
    stringWithHashtag = stringWithHashtag + '#';
  }

  for (let i = 0; i <= 6; i++) {
    stringEmpty = stringEmpty + ' ';
  }

  stringWithColor =
    stringWithHashtag + stringEmpty + color + stringEmpty + stringWithHashtag;

  console.log(chalk.hex(color)(stringWithColor));
}

drawLongLine();
drawLongLine();
drawLongLine();
drawShortLine();

drawLineWithColor(color);

drawShortLine();
drawLongLine();
drawLongLine();
drawLongLine();
