data = [5, 7, 2, 4, 3, 6]

const fatorial = n => n === 0 || n === 1 ? 1 : n * fatorial(n - 1);
const organizarFoto = (pessoas) => `${pessoas} pessoas, ${fatorial(pessoas)} possibilidades`;

for (let int of data) {
    console.log(organizarFoto(int))
}