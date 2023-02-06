
//funcion normal
function sumar(a , b) {
    return a + b;
}

console.log(sumar( 5, 3))

//Funcion flecha
const sumar2 = (a , b ) => {
    return a + b;
}

console.log(sumar2(5, 3));

//funcion flecha en una sola línea
//cuando es una sola línea podemos omitir corchetes y el return
const sumar3 = (a , b ) => a + b;
console.log(sumar3(5, 3));

//sin parámetros
const saludar = () => 'Hola Mundo';
console.log(saludar());
