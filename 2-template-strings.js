const nombre = 'Deadpool';
const real = 'Wade Winston';

//forma de concatenación normal
const normal = nombre + ' '+ real;

//forma de concatenación por plantillas (dentro de los ${  permite código javascript  })
//las plantillas es como un string superpoderoso 
//se hacen con 'tilde invertida' o 'backtick'
const template = `${nombre} ${real}`;


console.log(normal);
console.log(template);

//también se puede: 
const cadenaHtml = `
<h1>Hola</h1>
<p>Mundo</p>
`;

`Hola `
//(no tengo que concatenar en cada salto, los saltos están al interior de la plantilla)
console.log(cadenaHtml);
