const tweetForm = document.querySelector('#tweetForm');
const tweetContainer = document.querySelector('ul');

tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // const userNameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];

    const userNameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    // console.log(userNameInput);
    addTweet(userNameInput.value, tweetInput.value);
    userNameInput.value = '';
    tweetInput.value = '';

    console.log('Submited!!');
}); 

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    tweetContainer.append(newTweet);
}

// const lis = document.querySelectorAll('li');

// for(let li of lis){
//     li.addEventListener('click', function(e){
//         li.remove();
//     })
// }

tweetContainer.addEventListener('click', function(e){
    e.target.nodeName === 'LI' && e.target.remove();
})