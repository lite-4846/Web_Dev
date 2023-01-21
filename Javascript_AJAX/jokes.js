const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        // console.log(res);
        return res.data.joke;
    } catch (e) {
        return 'No JOkes Available..'
    }
}

const addNewJoke = async () => {
    const newJoke = await getDadJoke();
    // console.log(newJoke);
    const newLi = document.createElement('li');
    newLi.append(newJoke);
    jokes.append(newLi);
}

button.addEventListener('click', addNewJoke);