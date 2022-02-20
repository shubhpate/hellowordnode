var fs = require("fs");
fs.writeFileSync("text.txt","hello this is text file");
console.log(fs.readFileSync('text.txt').toString());