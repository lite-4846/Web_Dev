function fakeCallBackRequest(url, success, failure) {
    const delay = Math.floor(Math.random() * 1000) + 500;
    setTimeout(() => {
        if (delay < 750) {
            success(`Here is your fake request ${url}`);
        } else {
            failure('Error!')
        }
    }, delay)
}

// fakeCallBackRequest('boobs.com',
//     function (success) {
//         console.log('It worked!')
//         console.log(success);
//         fakeCallBackRequest('boobs.com/larger',
//             function (success) {
//                 console.log('It worked! afterAll')
//                 console.log(success);
//             }, function (err) {
//                 console.log('1st req',err);
//             })
//     },
//     function (err) {
//         console.log(err);
//     }
// );

function fakePromiseRequest(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve('Yameroo!');
        }, delay)
    })
}

// fakePromiseRequest('red', 1000)
//     .then(() => fakePromiseRequest('orange', 1000))
//     .then(() => fakePromiseRequest('yellow', 1000))
//     .then(() => fakePromiseRequest('green', 1000))
//     .then(() => fakePromiseRequest('blue', 1000))
//     .then(() => fakePromiseRequest('indigo', 1000))
//     .then(() => fakePromiseRequest('violet', 1000))

async function rainbow(){
    await fakePromiseRequest('red', 1000);
    await fakePromiseRequest('orange', 1000)
    await fakePromiseRequest('yellow', 1000)
    await fakePromiseRequest('green', 1000)
    await fakePromiseRequest('blue', 1000)
    await fakePromiseRequest('indigo', 1000)
    await fakePromiseRequest('violet', 1000)
    return console.log('Done!');
}

async function printRainbow(){
    await rainbow();
    console.log('Yatta!')
}

printRainbow();