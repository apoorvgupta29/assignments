// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.
// For example, if the file input was
// hello     world    my    name   is       raman
// After the program runs, the output should be
// hello world my name is raman

const fs=require("fs");
const path= require("path");
const filepath = path.join(__dirname,"./file-cleaner.txt");

function update(){
    fs.readFile(filepath,{encoding : "utf-8"},(err,filedata)=> {
        if(err) throw err;
        filedata = filedata.replace(/\s+/g, ' ').trim();
        console.log(filedata);
        fs.writeFile(filepath, filedata, (err)=>{
            if(err) throw err;
            console.log("File Updated");
        });
    });
}

update()