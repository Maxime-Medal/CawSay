const student = require('./information');

//console.log(`Hello, i'm ${student.name}, I'm from ${student.campus} campus`);
const cowSay = require ("cowsay");

console.log(cowSay.say({
        text: `Hello, i'm ${student.name}, I'm from ${student.campus} campus`,
        e: "^^",
        T: "U",

}));