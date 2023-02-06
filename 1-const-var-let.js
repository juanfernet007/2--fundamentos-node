
//por fuera SCOPE 1 
//siempre usar 'let' en lugar de 'var', 
//pero si sabemos que no va a cambiar usar 'const' porque es más liviano
const nombre = 'wolverine';

if (true) {
    //al interior SCOPE 2
    const nombre = 'Magneto'; 
    console.log(nombre);
}

console.log(nombre);

