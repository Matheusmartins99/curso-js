// OBJETOS
 
const person = {
    firstName: "Matheus",
    lastName2: "Martins",
    age: "17",
    hobbies:["Assistir F1", "jogar futebol", "Ler"],
    dog: {
        name:"Simba",
        age: 4,
    },
 };
 
 //const firstName = person.firstName;
 //const lastName = person.lastName;
 //const age = person.age;
 //const hobbies = person.hobbies;
 
 // Mesma coisa que acima
 const { 
    firstName: primeironome,
    lastName2,
    age,
    hobbies,
    dog: { name: dogName },
  } = person;
 
 const read = person.hobbies[2];
 
 
 console.log(primeironome);
 console.log(lastName2);
 console.log(age);
 console.log(hobbies);
 
 //person.dog = "Simba";
 
 console.log(person.dog.age);
 console.log(dogName);