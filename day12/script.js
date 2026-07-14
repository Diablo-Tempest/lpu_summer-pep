// debouncing
//Common Uses of Debouncing technique
//  Serach suggestions, API calls, Form validations, saving drafts, Window Resize events

// function debounce(callback, delay) {
//     let timerId;
//     return function(...args){
//         clearTimeout(timerId); // Cancels the last timeOut
//         timerId = setTimeout(() => {
//             callback(...args);
//         }, delay * 1000);
//     }
// }
// const search = (query) =>{
//     console.log(`Searching for ${query}`);
// }

// const searchUsingDebounce = debounce(search, 2);

// searchUsingDebounce("He");
// searchUsingDebounce("Hello");
// searchUsingDebounce("Hello ");
// searchUsingDebounce("Hello World");


//Throttling

/*
 lastCall = 0;
 currentTime = 156;
 165 - 0 < 1 false
 lastCall = 156;
 message: "Call My name!"
 
 lastCall = 156
 currentTime = 156.5
 156.6 - 156 < 1 true
 return;

 lastCall = 156
 currentTime = 156.5
 157.1 - 156 < 1 false
 message: "Call my Name";

*/

function throttle(callback, interval) {
    let lastCall = 0;
    return function(...args){
        let currentTime = Date.now();
        if (currentTime - lastCall < interval) {
            return;
        }
        lastCall = currentTime;
        return callback(...args);
    }
}

function sendComment(comment) {
    console.log(`Message: ${comment}`);
}

const sendCommentUsingThrottling = throttle(sendComment, 1);


sendCommentUsingThrottling("Call out my Name!");
sendCommentUsingThrottling("Call out my Name!");
sendCommentUsingThrottling("Call out my Name!");
sendCommentUsingThrottling("Call out my Name!");
sendCommentUsingThrottling("Call out my Name!");
sendCommentUsingThrottling("Call out my Name!");
sendCommentUsingThrottling("Call out my Name!");
sendCommentUsingThrottling("Call out my Name!");
sendCommentUsingThrottling("Call out my Name!");
sendCommentUsingThrottling("Call out my Name!");
sendCommentUsingThrottling("Call out my Name!");
sendCommentUsingThrottling("Call out my Name!");
sendCommentUsingThrottling("Call out my Name!");
sendCommentUsingThrottling("Call out my Name!");
sendCommentUsingThrottling("Call out my Name!");
sendCommentUsingThrottling("Call out my Name!");

// Homework
// Proxy and Reflect Objects