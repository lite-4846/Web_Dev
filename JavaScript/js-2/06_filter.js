// -->  Filter.

const validUserNames = (username) => {
    return username.filter((name) => {
        if(name.length < 10){return console.log(name)};
    })
}

validUserNames(['om', 'dieidkdiek', 'deidie', 'kdiei']);