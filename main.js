let nometurma = [];
let mediaturma = [];
// Esta função vai rodar quando o botão for clicado
function cadastraraluno() {
    // Pegamos o valor que o usuário digitou na caixa 'nomealuno' (Equivalente ao leia(nome))
    let nome = document.getElementById("nomealuno").value;

    // Pegamos as notas e usamos o parseFloat para transformar o texto em número com vírgula
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);

    // Validação simples: se esquecer de digitar algo, avisa e para aqui
    if (!nome || isNaN(nota1) || isNaN(nota2)) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Calculamos a média
    let media = (nota1 + nota2) / 2;
    // a lógica do aprovado/reprovado (se/senao)
    let situacao = "";
    if (media >= 7) {
        // Se a média for maior ou igual a 7, o aluno está aprovado
        situacao = "Aprovado pabens!";
    } else {
        // Caso contrário, o aluno está reprovado
        situacao = "Reprovado beta";
    }
    // Guardamos nas listas
    nometurma.push(nome);
    mediaturma.push(media);

/*innerHTML: Diz que vamos trocar o texto/conteúdo que está dentro dessa tag.
 "Texto" + variavel: O sinal de '+' junta o texto fixo com o valor da variável (concatenação).
 "<br>": É a tag HTML para pular linha (funciona como o '\n' do Portugol).
 .toFixed(1): Limita o número da média para mostrar apenas 1 casa decimal (ex: 7.5).*/

   document.getElementById("resultadoaluno").innerHTML = 
        "Aluno: " + nome + "<br>" +
        "Média: " + media.toFixed(1) + "<br>" +
        "Situação: " + situacao;
}