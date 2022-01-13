data = ["{[()(){}[]]{}}", "{[(()]}", "{}[]()", "((){}[[])", "]"];

function factory() {
    return {
        abre: 0,
        fecha: 0,
        valido() {
            return this.abre !== 0 && this.fecha !== 0 && this.abre === this.fecha
        }
    }
}

const sequenciaValida = (text) => {
    let parenteses = factory();
    let colchetes = factory();
    let chaves = factory();

    for (let i = 0; i < text.length; i++) {
        switch(text.charAt(i)) {
            case '(':
                parenteses.abre++;
                break;
            case ')':
                parenteses.fecha++;
                break;
            case '[':
                colchetes.abre++;
                break;
            case ']':
                colchetes.fecha++;
                break;
            case '{':
                chaves.abre++;
                break;
            case '}':
                chaves.fecha++;
                break;
        }
    }

    return parenteses.valido() && colchetes.valido() && chaves.valido();
}

for (let caracteres of data) {
    sequenciaValida(caracteres)
        ? console.log(`'${caracteres}' -> é uma sequência válida`)
        : console.log(`'${caracteres}' -> não é uma sequência válida`);
}