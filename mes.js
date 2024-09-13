class mes {
    constructor(nomeDoMes, saldoIncial) {
        if (nomeDoMes === "") { throw new Error("Lançamento inválido: Nome do mês é obrigatório") }
        this.nomeDoMes = nomeDoMes;
        this.saldoIncial = saldoIncial;
        this.totalizador = { saldo: 0, saldoInicial: 0, juros: 0, rendimentos: 0, receitas: 0, despesas: 0, distribuicaoDeDespesas: [] };
        this.lancamentos = [];
    }
    adicionarLancamento(lancamento) {
        this.lancamentos.push(lancamento);
    }

    calcularSaldo() {
        this.totalizador.saldo = this.saldoIncial;
        this.apurarReceitas();
        this.apurarDespesas();
        this.distriuirDespesas();
        this.apurarJuros();
        this.apurarRendimentos();
    }
    apurarReceitas() {
        for (const lancamento of this.lancamentos) {
            if (lancamento.tipo === "receita") {
                this.totalizador.saldo += lancamento.valor;
                this.totalizador.receitas += lancamento.valor;
            }
        }
    }
    apurarDespesas() {
        for (const lancamento of this.lancamentos) {
            if (lancamento.tipo === "despesa") {
                this.totalizador.saldo -= lancamento.valor;
                this.totalizador.despesas += lancamento.valor;

            }
        }
    }
    distriuirDespesas() {
        const distribuicaoDeDespesas = [];
        for (const lancamento of this.lancamentos) {
            if (lancamento.tipo === "despesa") {
                const percentual = arredondar((lancamento.valor / this.totalizador.despesas) * 100);
                distribuicaoDeDespesas.push({ categoria: lancamento.categoria, percentual });
            }

        }
        this.totalizador.distribuicaoDeDespesas = distribuicaoDeDespesas;
    }
    apurarRendimentos() {
        if (this.totalizador.saldo > 0) {
            this.totalizador.rendimentos = this.calcularRendimentos(this.totalizador.saldo);
            this.totalizador.saldo = arredondar(this.totalizador.saldo + this.totalizador.rendimentos);
        }
    }
    apurarJuros() {
        if (this.totalizador.saldo < 0) {
            this.totalizador.juros = this.calcularJuros(this.totalizador.saldo);
            this.totalizador.saldo = arredondar(this.totalizador.saldo + this.totalizador.juros);

        }
    }
    calcularJuros(saldo) {
        const juros = saldo * 0.1;
        return juros;
    }

    calcularRendimentos(valor) {
        const rendimentos = valor * 0.005;
        return rendimentos;
    }
}