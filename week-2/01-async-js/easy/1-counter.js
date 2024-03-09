// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second
// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function update(count){
    const interval= setInterval(()=>{
        console.log(count);
        count--;
        if (count < 0){
            console.log("allah Huakbar");
            clearInterval(interval);
        }
    }, 1000);
}

update(5);  
