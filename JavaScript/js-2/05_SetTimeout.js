// -->  Set Timeout

console.log('*********   Set Timeout and interval  ********')

console.log('Moshi Mosh!');  // -- 1.

setTimeout(() => {
    console.log('Yamero...(This comes 3 sec later)');  //  -- 2.
}, 3000);

console.log('Baka');  // -- 3.

// -->  Set Interval

console.log('lol');

const set = setInterval(() => {
    console.log('Arigatou');
}, 2000);  // --> this will run infinite time.

clearInterval(set);