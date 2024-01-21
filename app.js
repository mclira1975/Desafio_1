let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';


function verificarConsole() {
    console.log('O botão foi clicado')
}

function verificarAlert() {
    alert('Eu amo JS')
}

function verificarPrompt() {
    let nomeDaCidade = prompt('Escolha o nome de uma cidade, que gosta muito:');
alert(`Estive em ${nomeDaCidade} e lembrei de você! `)
}

function verificarSoma() {
    let PrimeiroNumero = parseInt (prompt('Escolha o primeiro número:'));
    let SegundoNumero = parseInt (prompt('Escolha o segundo número:'));
    let resultado = PrimeiroNumero + SegundoNumero;
    alert (`${PrimeiroNumero} + ${SegundoNumero} = ${resultado}`)

}