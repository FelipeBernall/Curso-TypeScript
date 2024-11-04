let numeros: number[] = [1, 2, 3]; // Array mutável de números
numeros.push(4);                   // OK: adiciona um novo número
numeros[0] = 10;                   // OK: altera o primeiro valor
console.log(numeros);              // Exibe: [10, 2, 3, 4]

let numerosFixos: ReadonlyArray<number> = [1, 2, 3]; // Array somente leitura
// numerosFixos.push(4);            // ERRO: não pode adicionar em ReadonlyArray
// numerosFixos[0] = 10;            // ERRO: não pode alterar elementos de ReadonlyArray
console.log(numerosFixos);         // Exibe: [1, 2, 3]
