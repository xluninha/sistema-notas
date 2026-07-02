let nometurma = [];
let mediaturma = [];
// Esta função vai rodar quando o botão for clicado
function cadastraraluno() {
    // Pegamos o valor que o usuário digitou na caixa 'nomealuno' (Equivalente ao leia(nome))
    let nome = document.getElementById("nomealuno").value;
    
    // Pegamos as notas e usamos o parseFloat para transformar o texto em número com vírgula
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);

    // Calculamos a média
    let media = (nota1 + nota2) / 2;
}