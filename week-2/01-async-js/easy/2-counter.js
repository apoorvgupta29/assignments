// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

function updatec(counts){
    console.log(counts);
}

for(let i=30 ;i>=0; i--){
    setTimeout(() => {
        updatec(i);
    }, (30-i)*1000);
}

