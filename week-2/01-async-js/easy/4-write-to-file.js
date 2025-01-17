// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.


const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, './task.txt');
let data = "hello my name is gupta";

console.log(typeof data);

fs.writeFile(filePath, data.toString(), (err) => {
    if (err) throw err;
    console.log('File saved');
});