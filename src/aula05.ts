let doisTipos: string | number; // Variável que aceita string ou number
doisTipos="Felipe";
doisTipos=21;


let arrayDoisTipos: (string | number)[] = []; // Array que aceita tanto strings quanto números
arrayDoisTipos.push("Felipe"); // Adiciona uma string ao array
arrayDoisTipos.push(12);       // Adiciona um número ao array

let cursos = ["JavaScript", "TypeScript", "Java"]; // Array de strings inicializado com alguns cursos
cursos.push("Python"); // Adiciona "Python" ao array de cursos

let valores = [10, 20, 30];   // Array de números inicializado com valores
valores.push(40);             // Adiciona 40 ao array de valores


console.log(doisTipos)       // Saída: 21
console.log(arrayDoisTipos); // Saída: ["Felipe", 12]
console.log(cursos);         // Saída: ["JavaScript", "TypeScript", "Java", "Python"]
console.log(valores);        // Saída: [10, 20, 30, 40]
