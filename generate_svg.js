const TextToSVG = require('text-to-svg');

const textToSVG = TextToSVG.loadSync('./GreatVibes-Regular.ttf');
const word = "Anniversary";
const fontSize = 72; // The size in pixels

const options = { x: 0, y: 0, fontSize: fontSize, anchor: 'top baseline', attributes: { fill: 'none', stroke: 'black' } };

let currentX = 0;
const letters = [];

for (let i = 0; i < word.length; i++) {
    const char = word[i];
    const metrics = textToSVG.getMetrics(char, options);
    const pathD = textToSVG.getD(char, options);
    
    letters.push({
        char: char,
        x: currentX,
        d: pathD
    });

    currentX += metrics.advance;
}

const scale = 1; 

console.log(JSON.stringify(letters, null, 2));
console.log("Total width:", currentX);
