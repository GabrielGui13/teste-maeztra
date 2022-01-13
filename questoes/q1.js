let data = [
  12345678, 1223455678, 876543210, 152456457, 12356789, 13579, 9765421,
  123454321, 12222222, 2111111, 1599
];

const estaOrdenado = (n) => {
    let number = `${n}`;
    let crescente = false;

    for (let i = 1; i < number.length; i++) {
        if (number[0] === number[i]) continue;

        if (number[0] < number[i]) {
            crescente = true;
            break;
        } else break;
    }

    let count = number[0];
    let ordenado = true

    if (crescente) {
        for (let i = 1; i < number.length; i++) {
            if (parseInt(number[i]) < parseInt(count) || parseInt(number[i]) - parseInt(count) > 1) {
                ordenado = false;
                break;
            }
            else if (parseInt(number[i]) == parseInt(count)) continue;

            count++;
        }
    } else {
        for (let i = 1; i < number.length; i++) {
            if (parseInt(number[i]) > parseInt(count) || parseInt(count) - parseInt(number[i]) > 1) {
                ordenado = false;
                break;
            }
            else if (parseInt(number[i]) == parseInt(count)) continue;

            count--;
        }
    }

    return ordenado;
}

for (let number of data) {
    estaOrdenado(number)
        ? console.log(`${number} -> Está ordenado`)
        : console.log(`${number} -> Não está ordenado`);
}