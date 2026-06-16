//Pegando elementos do DOM
const divFor = document.querySelector('#div-for')

//Estruturas de Repetições
//for(i = 10; i < 10; i++){
    //console.log(i)
    //divFor.innerHTMLL += `${i} <br>`
//}

//Contador e Acumulador
const inputNum1 = document.querySelector('#num1')
const btnNum1 = document.querySelector('#btn-num1')
const divResult = document.querySelector('#result-cont-acum')

let cont = 0, contPar = 0, contimpar = 0
let acum = 0.0

btnNum1.addEventListener('click', (evt)=>{
    let numDigitado = Number(inputNum1.value)

    //Declaração de Contador
    cont++
    //Declaração de Acumulador
    acum += numDigitado
    //acum = numDigitado para subtrair

    //numDigitado % 2 == 0 significa se o num Digitado dividido por dois sobra 0 
    if(numDigitado % 2 == 0){
        contPar++
    }else{
        contImpar++
    }

    console.log(numDigitado)

    divResult.innerHTML = `Total de números digitados ${cont} <br> A soma dos números digitados ${acum} <br> Par digitado: ${contPar} <br> Ímpar digitado: ${contImpar} <br>´
    divFor.innerHTML += ´${numDigitado} <br>`
})

//Repetição com While
const inputFrase = document.querySelector ('#msg')
const inputNumRepeticao = document.querySelector('#numRepeticao')
const btnExibir = document.querySelector('#btn-exibir')
const divResultFrase = document.querySelector('#result-frase')

let contFrase = 0
let totalRepeticao = Number(inputNumRepeticao.value)

btnExibir.addEventListener('click', (evt)=>{
    totalRepeticao = Number(inputNumRepeticao.value)

    while(totalRepeticao > contFrase){
        divResultFrase.inneHTML +=`${contFrase + 1} - ${inputFrase.value} <br>`
        contFrase++
    }

})

//Coleção de Dados - ARRAY
transporte = ['Bicicleta', 'Moto', 'Ônibus', 'Avião']

for (let i = 0; i<=transporte.length; i++){
    console.log(transporte[i])
}

//For in
const divForin = document.querySelector('#div-forin')

for(let elem of transporte){
    divForOf.innerHTML += `${elem} <br>`
}

//Coleção de Pessoas - Array de Objeto
const pessoas = [
    {nome: 'Maria', idade: 18, renda: 1500 },
    {nome: 'Josefina', idade: 23, renda: 1800 },
    {nome: 'Chicó', idade: 32, renda: 1.50 },
    {nome: 'João Grilo', idade: 34, renda: 2.20 },
]

console.log('----------LISTA POR FOR IN----------')
for(let indiceObjPessoa in pessoas){
    console.log(pessoas[indiceObjPessoa].nome, pessoas[indiceObjPessoa].idade, pessoas[indiceObjPessoa].renda)
}

console.log('----------LISTA POR FOR OF----------')
for(let pessoa of pessoas){
    console.log(pessoa.nome, pessoa.idade. pessoa.renda)
}

//FOREACH
const divForeach = document.querySelector('#div-foreach')

pessoas.forEach((elem, i)=>{
    divForeach.innerHTML += `${i} - ${elem.nome}, ${elem.idade} anos com renda R$ ${elem.renda.toFixed(2).replace(".", ",")} <br>`
})