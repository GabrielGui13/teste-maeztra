data = [[4, 5, 44, 98, 4, 5, 6, 7], [4, 7, 7, 14, 5, 6, 7]];

const duplicate = (data) => {
    let auxArray = []
    let duplicated = []

    for (let i = 0; i < data.length; i++) {
        if (auxArray.find(e => e == data[i]) && !(duplicated.find(e => e == data[i]))) 
            duplicated.push(data[i]);
        else auxArray.push(data[i]);
    }

    return duplicated
}

for (let array of data) {
    console.log(duplicate(array));
}