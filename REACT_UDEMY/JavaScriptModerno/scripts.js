//Variaveis declaradas com Let e Const definem variveis de bloco.
//variaveis de bloco se limitam as chaves em que estão dentro
//let-> Pode ter os valores alterados
//Const-> Os valores sao permanentes

var num = 2
var num3 = 3
console.log(num)

if(num < num3) {
    num = 10
    console.log(num)
}
//var é um tipo que pode ser alterado, dessa forma, caso altere dentro de um escopo, ele altera fora tb
console.log(num)
//como defino como let, o num não é alterado fora do escopo das chaves
if(num > num3) {
    let num = 500
    console.log(num)
}
console.log(num)

//O valor var nomeP= 'Pedro'
var nomeP = 'Pedro'
console.log(nomeP)
var nomeP = 'Joao'
console.log(nomeP)
const nomePP = 'Lucas'
console.log(nomePP)
//const nomePP = 'Pedro' Dá erro de compilação pois Cont é um tipo que nao pode ser alterado
console.log('------------------------------------')


//ArrowFunctions:
//São anonimas
//ex1:
const sum  = function sum(a, b){
    return a + b
}
//não possui um nome, é atribuia a uma constante.
const arrowSum = (a, b) =>{
    return a + b
}

//também é possivel quando se tem apenas uma linha , eliminar algumas coisas
const arrowSumReduzida = (a, b) => a + b

const greeting = (nome) => {
    if(nome){
        return 'Ola' + ' '+ nome
    }
    else{
        return'Ola Desconhecido'
    }
}
console.log(greeting('Herrique'))
console.log(greeting())

const testArrow = () => console.log('testou')

console.log(testArrow())

console.log('----------------------------------------------------------------')

//criando um objeto
const user = {
    name: 'Theo',

    //funcao com função de TimeOut que recebe uma function dentro dela
    //Sem usar arrowFunction, a refetencia ao objeto se perde dentro da function interna
    //setTimeout recebe 2 parametros, uma function  a ser executada e um valor em Ms 
    sayUsernameArrow(){
        setTimeout( ()=>{ 
            console.log(this)
            console.log('Username: '+ this.name)},
            700
        )
    }

}
//user.sayUsernameArrow()

console.log('================================================================')

//Filter
//metodo de array qye filtra dados indesejados
//filtro é realizado por condições estabelecidas
//a constante array não é modificada, ela é uma nova constrante com os valores filtrados
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

const selectEven = array.filter((n) => {
    if(n % 2 == 0){
        return n
    }

})
console.log(array)
console.log(selectEven)
//Essa é a estrutura que um objeto possui
//name e available são como atribtos de users
const users = [
    { name: 'Matheus', available: true},
    {name: 'pedro', available: false},
    { name: 'marcos', available: true},
    { name: 'lucas', available: true}

]


const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available) 

console.log(availableUsers)
console.log(notAvailableUsers)

console.log('----------------------------------------------------------------')

//MAP
//Metodo que percorre todos os elementos do Array
//Nesse metodo queremos modificar os elementos do Array
//é possuível adicionar atributos aos produtos por meio de mapeamento

const products =[
    {name: 'Camisa', price : 10.99, category: 'Roupas'},
    {name: 'Chaleira eletrica', price : 49.99, category: 'Eletro'},
    {name: 'Fogao', price : 400.99, category: 'Eletros'},
    {name: 'calça', price : 50.99, category: 'Roupas'},
]

products.map((product) => {
    if(product.category === 'Roupas'){
        product.onSale = true
    }
}
)
products.map((product) => product.sold = 0)
    
console.log(products)

console.log('----------------------------------------------------------------')

//TEMPLATE LITERALS
//permite concatenar string de forma simples

const Username = 'Matheus'
const age = 30
console.log(`O nome do Usuario é ${Username} e sua idade é : ${age}`)   


//Destructuring
//Recurso para arrays e objetos
//Simplifica declaração de variaveis em 1 linha

const frutas = ['maça', 'banana', 'kiwi', 'mamao']

const [f1, f2, f3, f4] = frutas

console.log(f1, f2, f3, f4)

const productDetaisl ={
    name : "mouse",
    price : 39.99,
    category : "periferico",
    color : "cinza"
}

const {name : productname, price, category : productCategory, color} = productDetaisl

console.log(`O nome do produto é ${productname}, custa ${price} e pertence a categoria ${productCategory}` )

//Spread Operator
//usamos para constituir novos valores de dados de arrays e objetos em outros arrays e objetos
//podemos unir arrays de maneira simples ou adicionar valores de um produrto a outro

const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]
console.log(a3)

const a4 = [3, 2, 1, ...a1, 6, 5, 4, ...a2]
console.log(a4)

const carName = { name : 'Gol'}
const carBrand = {brand : 'VW'}
const otherInfo = {km: 10000, price : 49000}

const car = {...carName, ...carBrand, ...otherInfo}
console.log(car)

//Classe
class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }

    productWithcDiscount(discount){
        return this.price * ((100 - discount)/100)
    }
}

const shirt = new Product("Camisa gola v", 20)

console.log(shirt.name)

//HERANÇA
//Usamos a palava EXTENDS para referir a classe herdada
//as proproedades devem ser enviadas por meio de super;
//super envia para as classes de cima(pai)


class ProductWithAttributes extends Product {

    constructor(name, price, colors){
        super(name, price)
        this.colors = colors
    }

    showColors(){
        console.log("As cores sao:")
        this.colors.forEach((color)=> {
            console.log(color)
        })
    }
}

const hat = new ProductWithAttributes('Chapeu', 20, ['verde', 'preto', 'azul'])

console.log(hat.name)
console.log(hat.productWithcDiscount(30))
hat.showColors()