let pessoa: [string, number]; // Tupla que espera uma string e um número

pessoa = ["Felipe", 21];     // OK: ordem e tipos corretos
// pessoa = [21, "Felipe"];  // ERRO: ordem e tipos incorretos
// pessoa = ["Felipe"];      // ERRO: faltando o segundo elemento

console.log(pessoa);         // Exibe: ["Felipe", 25]

let localizacao: [string, number, number] = ["Araçatuba", -21.2067, -50.4387]; // Tupla para nome e coordenadas
console.log(localizacao);    // Exibe: ["São Paulo", -23.55, -46.63]