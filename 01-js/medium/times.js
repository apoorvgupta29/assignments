/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    // Record the start time
    let startTime = new Date();

    for (let i = 1; i <= n; i++) {}

    // Record the end time
    let endTime = new Date();

    // Calculate the time difference in milliseconds
    let elapsedTimeInMilliseconds = endTime - startTime;

    // Convert milliseconds to seconds
    let elapsedTimeInSeconds = elapsedTimeInMilliseconds / 1000;

    return elapsedTimeInSeconds;
}

// Example usage:
const result = calculateTime(1000000);
console.log(`Time taken: ${result} seconds`);