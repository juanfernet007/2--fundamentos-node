const deadpool = {
    nombre: 'Nombre',
    apellido: 'Apellido',
    poder: 'Regeneración',
    edad: 50,
    getFullNombre(){ //otra forma abajo
        return `${this.nombre} ${this.apellido} ${this.poder}`
    },
    getFullNombre2: function(){ //otra forma para lo anterior
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

// //forma normal
// console.log(deadpool.getFullNombre());
// console.log(deadpool.getFullNombre());

// //forma normal 2
// const nombre =  deadpool.nombre;
// const apellido =deadpool.apellido; 
// const poder = deadpool.poder;

// console.log(nombre,apellido,poder);


//ejemplo de DESESTRUCTURACIÓN de objetos 
//(se puede definir por defecto por si no viene lleno un atributo ver edad):
const {nombre, apellido, poder, edad = 0 } = deadpool;
console.log(nombre, apellido, poder, edad);

//ejemplo de DESESTRUCTURACIÓN de objetos dentro de un metodo
function imprimirHeroe( heroe ){
    const {nombre, apellido, poder, edad = 0 } = heroe;
    console.log(nombre, apellido, poder, edad);
}

imprimirHeroe(deadpool);

//ejemplo de DESECTRURACIÓN de ojetos al llegar un objeto como parámetro de entrada
//se destrutura el heroe al llegar como parámetro
function imprimirHeroe2({nombre, apellido, poder, edad = 0}){
    console.log(nombre, apellido, poder, edad);
}

imprimirHeroe2(deadpool);





