
const heroes = ['Deadpool','Superman','Batman'];

// //forma normal
// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

// console.log(h1, h2, h3);

// forma desestructuracion
[h1, h2, h3] = heroes;
console.log(h1, h2, h3);

//forma desestructuración solo necesito el heroe 3
[ , , h3] = heroes;
console.log(h3);








