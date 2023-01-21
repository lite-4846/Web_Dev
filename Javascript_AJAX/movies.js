const searchForm = document.querySelector('#searchForm');

searchForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    removeAll();
    const searchResult = searchForm.elements.query.value;
    // console.dir(searchForm);
    const config = { params: { q: searchResult } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    console.log(res.data);
    makeImages(res.data);
})

const removeAll = () => {
    const allImg = document.querySelectorAll('img');
    for(let img of allImg){
        img.remove();
    }
}

const makeImages = async (shows) => {
    for(let result of shows){
        if (result.show.image) {
            let imgM = document.createElement('img');
            imgM.src = result.show.image.medium;
            document.body.append(imgM);
        }
    }
}

