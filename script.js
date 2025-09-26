function calcular() {
    // 1. Pegar os valores dos inputs
    const valorContaStr = document.getElementById('valorConta').value;
    const porcentagemGorjetaStr = document.getElementById('porcentagemGorjeta').value;
    const numeroPessoasStr = document.getElementById('numeroPessoas').value;

    // 2. Converter os valores de String para Number
    const valorConta = Number(valorContaStr);
    const porcentagemGorjeta = Number(porcentagemGorjetaStr);
    const numeroPessoas = Number(numeroPessoasStr);

    // 3. Fazer os cálculos
    const valorGorjeta = valorConta * (porcentagemGorjeta / 100);
    const valorTotal = valorConta + valorGorjeta;
    const valorPorPessoa = valorTotal / numeroPessoas;

    // 4. Mostrar o resultado na tela
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p>Gorjeta Total: R$ ${valorGorjeta.toFixed(2)}</p>
        <p>Valor Total da Conta: R$ ${valorTotal.toFixed(2)}</p>
        <p>Valor por Pessoa: R$ ${valorPorPessoa.toFixed(2)}</p>
    `;
    // .toFixed(2) é usado para formatar o número com 2 casas decimais.
}