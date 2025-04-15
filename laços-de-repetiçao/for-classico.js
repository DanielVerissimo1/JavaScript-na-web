
const notas = [19,90,9,20,10]
let somaNotas = 0

// for classico
console.log("versao com for classico")
for (let index = 0; index < notas.length; index++) {
   
    somaNotas += notas[index]
}
const media = somaNotas/notas.length
console.log(media)


/* 

   for...in
console.log("versao com in")
 for (const chave in notas) {
   console.log(chave, notas[chave]);
 }*/
