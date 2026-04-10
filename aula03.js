"use strict"

let nome = "Cesar"
nome = "Kaiser" // Alterando o valor da variável (permitido com let)
nome = 3 // Alterando o tipo da variável (JavaScript permite isso)

const gaveta = "meia" // Declarando uma constante (não pode ser reatribuída)


gaveta = "tenis"  // ERRO: não é possível alterar o valor de uma constante

console.log(gaveta)

// let: pode ser alterada, mas só funciona dentro do bloco onde foi criada

// var: pode ser usada fora de blocos (escopo global ou de função), 
// mas isso pode causar problemas, por isso é pouco recomendada hoje

// const: não pode ter seu valor reatribuído após a criação