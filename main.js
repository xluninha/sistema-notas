// Vetores globais para acumular os dados da turma
let nometurma = [];
let mediaturma = [];
let notas1Turma = [];
let notas2Turma = [];

// Esta função vai rodar quando o botão for clicado
function cadastraraluno() {
    // Busca os dados das caixinhas do HTML (IDs totalmente em minúsculo)
    let nome = document.getElementById("nomealuno").value;
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);

    // Validação simples: se esquecer de digitar algo, avisa e para aqui
    if (!nome || isNaN(nota1) || isNaN(nota2)) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Calcula a média do aluno atual
    let media = (nota1 + nota2) / 2;
    
    // Lógica do aprovado/reprovado
    let situacao = "";
    if (media >= 7) {
        situacao = "Aprovado pabens!";
    } else {
        situacao = "Reprovado beta";
    }

    // Guarda os dados nos respectivos vetores
    nometurma.push(nome);
    mediaturma.push(media);
    notas1Turma.push(nota1);
    notas2Turma.push(nota2);

    // Monta o texto com TODOS os alunos acumulados
    let textolista = "";
    let somamedias = 0;

    for (let i = 0; i < nometurma.length; i++) {
        // Descobre a situação do aluno atual na lista usando o vetor correto (mediaturma)
        let situacaoAtual = mediaturma[i] >= 7 ? "Aprovado pabens!" : "Reprovado beta";
        
        // Acumula a linha do aluno com as duas notas no meio, média e status
        textolista += (i + 1) + ". " + nometurma[i] + 
                      " | Nota 1: " + notas1Turma[i] + 
                      " | Nota 2: " + notas2Turma[i] + 
                      " | Média: " + mediaturma[i].toFixed(1) + 
                      " | Status: " + situacaoAtual + "<br>";

        // Soma as médias para calcular a geral depois
        somamedias += mediaturma[i];
    }

    // Calcula a média geral da turma
    let mediaGeralTurma = somamedias / nometurma.length;

    // Injeta as informações corretas nas respectivas tags do HTML
    document.getElementById("resultadoaluno").innerHTML = 
        "Aluno: " + nome + "<br>" +
        "Média: " + media.toFixed(1) + "<br>" +
        "Situação: " + situacao;

    document.getElementById("listaAlunos").innerHTML = textolista;
    document.getElementById("mediaGeral").innerHTML = "Média geral da turma: " + mediaGeralTurma.toFixed(1);

    // Limpa as caixas de entrada para o próximo cadastro
    document.getElementById("nomealuno").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
}