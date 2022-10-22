// Algumas Funções nas listas (push - unshift - pop - indexOf - Array.isArray)
 
const names1 = ["Matheus" ,"João", "Julia", 10, false];

const joao = names1[1];

names.push("Pedro");
names.unshift("Fernanda");

names.pop();
names.pop();
names.pop();

names[3] = "Gustavo";

const indexOfMatheus = names1.indexOf("Matheus");

const sortedNames = names.sort();

const namesIsArray = Array.isArray(names1);

console.log(names1);
console.log(sortedNames);
console.log(namesIsArray);