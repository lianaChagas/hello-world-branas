class Lancamento {
    constructor(categoria, tipo, valor) {
        if (tipo !== "receita" && tipo !== "despesa") {
            throw new Error("Lançamento inválido: tipo diferente de receita ou despesa");
        }
        if (valor < 0) {
            throw new Error("Lançamento inválido: valor menor do que 0");
        }
        if (categoria === "") {
            throw new Error("Lançamento inválido: a categoria é obrigatória");
        }
        this.categoria = categoria;
        this.tipo = tipo;
        this.valor = valor;

    }
}