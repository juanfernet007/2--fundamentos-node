const empleados = [
    {
        id: 1,
        nombre : 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario : 1000
    },
    {
        id: 2,
        salario: 1500
    }    
];

const getEmpleado = (id, callback ) => {
    
    const empleado = empleados.find( e => e.id === id );

    if ( empleado ) {
        callback(null, empleado);
    }else{
        callback(`Empleado con id ${id} no existe!`);
    }
}

const getSalario = (id, callback ) => {

    const salario = salarios.find( s => s.id === id);

    if (salario) 
        callback(null, salario);
    else
        callback(`Salario con id ${id} no existe!`)
}


const idFind = 3;

//El callback hell se refiere a que
//podemos tener una funcion que internamente llame a un callback
//y esta a su vez llame a otro callback
//y esta a su vez llame otro callback, y así sucesivamente
//esto no representa un problema para javascript, peri si para la lectura de las personas.
//dificil mantenimiento
getEmpleado(idFind, (err, empleado) => {

    if( err ) {
        console.log('ERROR!');
        return console.log(err);
    }

    getSalario(idFind, (err, salario) => {
        if(err){
            console.log('ERROR!');
            return console.log(err);
        }

        console.log('El empleado: ', empleado.nombre, 'tiene un salario de ', salario.salario);
    })

} )



