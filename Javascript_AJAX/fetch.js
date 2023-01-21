// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log('Yep!', res);
//         return res.json();
//     })
//     .then(data => {
//         console.log('Here', data);
//         console.log(data.ticker.price);
//     })
//     .catch(e => {
//         console.log('Nope1..', e);
//     })

// const BitcoinPrice = async () =>{
//     try {
//         const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
//         const data = await res.json();
//         console.log(data.ticker.price);
//     } catch (e) {
//         console.log('huh?...', e);
//     }
// }

// const BitcoinPrice = async () => {
//     const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
//     console.log(res.data.ticker.price);
// }

const BitcoinPrice = async () => {
    const config = { headers : {Accept: 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    console.log(res.data.joke);
}

BitcoinPrice();