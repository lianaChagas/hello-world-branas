const saldoIncial = 0;
    const janeiro = new mes("janeiro", saldoIncial);
    janeiro.adicionarLancamento(new Lancamento("Salário", "receita", 3000));
    janeiro.adicionarLancamento(new Lancamento("Aluguel", "despesa", 1000));
    janeiro.adicionarLancamento(new Lancamento("Conta de água", "despesa", 200));
    janeiro.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 100));
    janeiro.adicionarLancamento(new Lancamento("Internet", "despesa", 100));
    janeiro.adicionarLancamento(new Lancamento("Transporte", "despesa", 300));
    janeiro.adicionarLancamento(new Lancamento("Lazer", "despesa", 300));
    janeiro.adicionarLancamento(new Lancamento("Alimentação", "despesa", 500));
    janeiro.adicionarLancamento(new Lancamento("Condomínio", "despesa", 300));
    janeiro.adicionarLancamento(new Lancamento("Farmácia", "despesa", 100));
    janeiro.calcularSaldo();
    console.log(janeiro);

    const fevereiro = new mes("fevereiro", janeiro.totalizador.saldo);

    fevereiro.adicionarLancamento(new Lancamento("Salário", "receita", 3000));
    fevereiro.adicionarLancamento(new Lancamento("Aluguel", "despesa", 1200));
    fevereiro.adicionarLancamento(new Lancamento("Conta de água", "despesa", 250));
    fevereiro.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 100));
    fevereiro.adicionarLancamento(new Lancamento("Internet", "despesa", 100));
    fevereiro.adicionarLancamento(new Lancamento("Transporte", "despesa", 500));
    fevereiro.adicionarLancamento(new Lancamento("Alimentação", "despesa", 1000));
    fevereiro.adicionarLancamento(new Lancamento("Condomínio", "despesa", 400));
    fevereiro.calcularSaldo();
    console.log(fevereiro);