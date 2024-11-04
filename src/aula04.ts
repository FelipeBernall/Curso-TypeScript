let semTipo = "Felipe"; // O TypeScript deduz o tipo automaticamente como String

// semTipo = 20 | ERRO: O tipo 'number' não pode ser atribuído ao tipo 'string'.

let semValor // Váriavel sem valor, o TypeScript atribui o tipo "ANY"

semValor="Felipe" // tipo String
semValor=20 // tipo numer, pois o "ANY" pode receber qualquer tipo de valor


let valor: number // Inclui todos os tipos numéricos
valor=10; 

let idadeA4: number = 25;           // Número inteiro
let altura: number = 1.75;          // Número decimal
let saldo: number = -100.50;        // Número negativo
let infinito: number = Infinity;    // Valor especial
let naoNumero: number = NaN;        // Not a Number


console.log(semValor) // resultado: 20 (Usou ANY e pode ser trocado pra qualquer tipo)