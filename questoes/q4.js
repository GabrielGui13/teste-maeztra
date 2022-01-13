data = [
  [1960, 2005],
  [1945, 2008],
  [1938, 1999],
  [1958, 2002],
];

let data2 = [
  [2019, 2022],
  [1993, 2022],
  [1990, 2002],
  [2021, 2022],
];

function factory(ano) {
    return {
        ano,
        pessoas: 0
    }
}

const maisPessoasNoAno = (data) => {
    let anos = [];
    let ordenado = data.flat().sort();
    let menor = ordenado[0];
    let maior = ordenado[ordenado.length - 1];

    for (let ano = menor; ano <= maior; ano++) {
        let anoAtual = factory(ano);

        for (let i = 0; i < data.length; i++) {
            if (ano >= data[i][0] && ano <= data[i][1]) anoAtual.pessoas++;
        }

        anos.push(anoAtual);
    }

    anos.sort((a, b) => {
        if (a.pessoas > b.pessoas) return 1;
        else if (a.pessoas < b.pessoas) return -1;
        else return 0;
    })

    let maiorQtdPessoas = anos[anos.length - 1].pessoas;
    let anosComMaisPessoas = [];

    for (let item of anos) {
        if (item.pessoas === maiorQtdPessoas) anosComMaisPessoas.push(item.ano)
    }

    return anosComMaisPessoas;
}

console.log(maisPessoasNoAno(data))