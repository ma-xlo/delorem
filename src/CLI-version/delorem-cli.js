/* Delorem - The CLI Lorem Ipsum text generetor */
/* Author: ma-xlo                               */
/* Version: 1.0                                 */
/*----------------------------------------------*/
import data from './wordBank.js';
import * as fs from 'fs';

const MAX_RANGE = 151;

//Capitalize a word
const capital = word => {
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
}

// Generate a random number
const random = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

// Generate a line with n words
const lineGen = (n) => {

    let line = '';
    for(let i = 0; i < n; i++) {
        let sortWord = data[Math.floor(Math.random() * MAX_RANGE)];
        line = `${sortWord} ${line}`;
    }
    return line;
}

//First Line
const wordNum = 15;
fs.writeFileSync("./lorem-ipsum.txt", `Lorem ipsum `)

// Paragraph generator
const paragraphGen = (p = 1) => {

    const fileName = "./lorem-ipsum.txt";
    for (let i = 0; i < p; i++) { 
        const lines = random(3, 7);
        for(let j = 0; j < lines; j++) {
            let content = `${lineGen(wordNum)}\n`;    
            fs.appendFileSync(fileName, content);
        }
        fs.appendFileSync(fileName,`\n`); 
    }
}

paragraphGen(10);

console.log("Your dummy text was generated!👋 ");

// Todo
// Put random ponctuation marks (.-,) throughout the text
// Create flags (e.g -c, -p)  
// Don't repeat the same word for each line
