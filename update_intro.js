const fs = require('fs');
const letters = JSON.parse(fs.readFileSync('letters.json'));
let tsCode = 'const LETTERS = [\n';
letters.forEach(l => {
    tsCode += `    { char: "${l.char}", d: "${l.d}" },\n`;
});
tsCode += '];';

let intro = fs.readFileSync('app/components/Intro.tsx', 'utf8');
intro = intro.replace(/const LETTERS = \[\s*([\s\S]*?)\];/, tsCode);
fs.writeFileSync('app/components/Intro.tsx', intro);
