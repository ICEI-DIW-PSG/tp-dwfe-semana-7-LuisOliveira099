

let nome = prompt("Digite seu nome:");


function lerNumero(mensagem) {
    let valor;
    while (true) {
        valor = Number(prompt(mensagem));
        if (!isNaN(valor)) {
            return valor;
        }
        alert("Valor inválido! Digite um número.");
    }
}

let renda = lerNumero("Digite sua renda mensal:");


let qtdDespesas = lerNumero("Quantas despesas deseja informar? (1 a 5)");

if (qtdDespesas < 1) {
    qtdDespesas = 1;
} else if (qtdDespesas > 5) {
    qtdDespesas = 5;
}


let totalDespesas = 0;

for (let i = 1; i <= qtdDespesas; i++) {
    let despesa = lerNumero("Digite o valor da despesa " + i + ":");
    totalDespesas += despesa;
}


let mensagem = "";
let sobra = renda - totalDespesas;

if (totalDespesas > renda) {
    mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
    if (sobra >= renda * 0.3) {
        mensagem = "✅ Ótimo: boa margem de sobra.";
    } else {
        mensagem = "🙂 Ok: dá para melhorar a sobra.";
    }
}


let resultado =
    "Nome: " + nome + "\n" +
    "Renda: R$ " + renda.toFixed(2) + "\n" +
    "Despesas: R$ " + totalDespesas.toFixed(2) + "\n" +
    "Sobra: R$ " + sobra.toFixed(2) + "\n" +
    mensagem;


alert(resultado);

console.log("Nome:", nome);
console.log("Renda: R$", renda.toFixed(2));
console.log("Despesas: R$", totalDespesas.toFixed(2));
console.log("Sobra: R$", sobra.toFixed(2));
console.log("Classificação:", mensagem);