let dadosFelipe = { // Não precisa especificar que é um objeto, pois a estrutura já identifica
    nome: "Felipe Bernal", // Propriedade 'nome' do objeto
    idade: 21,             // Propriedade 'idade' do objeto
    status: "Ativo"        // Propriedade 'status' do objeto
}

let comFuncao = {
    cumprimento: () => (console.log("Olá, eu me chamo " + dadosFelipe.nome)) 
}

comFuncao.cumprimento(); // Chama a função de cumprimento

console.log("Tipo: " + typeof(dadosFelipe)); // Exibe o tipo de 'dadosFelipe', que é 'object'

console.log("Nome: " + dadosFelipe.nome);   
console.log("Idade: " + dadosFelipe.idade); 
console.log("Status: " + dadosFelipe.status); 
