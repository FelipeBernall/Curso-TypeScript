"use strict";
let dadosFelipe = {
    nome: "Felipe Bernal",
    idade: 21,
    status: "Ativo"
};
let comFuncao = {
    cumprimento: () => (console.log("Olá, eu me chamo " + dadosFelipe.nome))
};
comFuncao.cumprimento();
console.log("Tipo: " + typeof (dadosFelipe));
console.log("Nome: " + dadosFelipe.nome);
console.log("Idade: " + dadosFelipe.idade);
console.log("Status: " + dadosFelipe.status);
