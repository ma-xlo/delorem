
const fs = require ('fs');
const fileName = ("./file.js");
const text = fs.readFileSync("./text.txt", "utf-8", (err, data) => {
    if(err)
        return "Somenthing didn't work!";
})


const processArray = text => {
    const array = [];
    text = text.toLowerCase().replace(/[,.;-]/g, '').split(' ');
    for(word of text) {
        if(!array.includes(word))
            array.push(word);
    }
    console.log(array.length);
    return array
}

const array = processArray(text);
fs.writeFileSync(fileName, `export const data = [\n`)
array.forEach(word => fs.appendFileSync(fileName, `\t"${word}",\n`))
fs.appendFileSync(fileName, `]`)
















/*

const writeStream = fs.createWriteStream('file.txt');
const pathName = writeStream.path;
let array = processArray(text);
  
// write each value of the array on the file breaking line
array.forEach(value => writeStream.write(`${JSON.stringify([value])}\n`));

// the finish event is emitted when all data has been flushed from the stream
writeStream.on('finish', () => {
   console.log(`wrote all the array data to file ${pathName}`);
});

// handle the errors on the write process
writeStream.on('error', (err) => {
    console.error(`There is an error writing the file ${pathName} => ${err}`)
});

// close the stream
writeStream.end();


fs.writeFile('./word-bank.js', JSON.stringify(processArray(text), function(err) {
    if(err) return console.log(err);
});

*/













