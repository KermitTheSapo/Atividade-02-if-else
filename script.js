// *SUBA O DESAFIO NO GITHUB E ENTREGUE O LINK DO CÓDIGO AQUI, (NÃO PRECISA COLOCAR ONLINE)

//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

let idade = 18
if (idade >= 18) {
    console.log("Você tem 18 anos ou mais!")
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true

let condicaoHumana = true
if (idade >=18 && condicaoHumana == true) {
    console.log("Você tem 18 anos ou mais e sua condição humana é true")
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro

let aniversarioJaneiro = false
let aniversarioDezembro = true

if (aniversarioJaneiro == true|| aniversarioDezembro == true) {
    console.log("Você faz aniversario em Janeiro ou dezembro")
}

//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R

let primeiraLetraNome = "Robert"
separaSilaba = primeiraLetraNome.split("")

if (separaSilaba[0] == "R") {
    console.log("Seu nome começa com R")
}

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E

let sobrenome = "Francisco"
contaSobrenome = sobrenome.length
separaSobrenome = sobrenome.split("")

if (contaSobrenome >= 6 || separaSobrenome[0] == "e") {
    console.log("Seu nome tem mais de 6 letras ou seu nome começa com a letra E")
}