 // Crie um array que receba 5 itens e exiba no console.
 let home = ["janela", "porta", "quarta","banheiro","quintal"]
 console.log(home)

// Utilize um método para adicionar um nome ao inicio do array.
home.unshift("lavanderia")
console.log(home)

// Utilize um método para remover o último nome do array.
home.pop()
console.log (home)

// Utilize um método para adicionar dois nomes ao fim do array.
home.push("suite", "closet")
console.log(home)

// Utilize um método para remover o primeiro nome do array.
home.shift()
console.log(home)

// Utilize um método para organizar em ordem crescente o seguinte array:
// const numbers = [7,5,6,3,8,9,2,1,4]
const numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort(function(a,b){
    return a-b
})
console.log(numbers)