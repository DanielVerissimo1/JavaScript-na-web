// let soma = 0

// const numeros = [12,9,0,4,5]
// // funçao normal
// function minhaFuncao(item) {
//     alert(item)
// }
// numeros("item01")

// // forEach serve para dar funçao aos elementos 

// numeros.forEach(minhaFuncao)



const notas = [10,6.5,8,7.5]

let somaDasNotas = 0


// function somaNotas(nota) {
//     somaDasNotas += nota    
// }
// notas.forEach(somaNotas)
notas.forEach((nota)=>{somaDasNotas += nota})

const media = somaDasNotas/ notas.length

console.log(media)