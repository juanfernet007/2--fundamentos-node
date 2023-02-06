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

const getEmpleado = ( id ) => {

    const promesa =  new Promise( (resolve, reject) => {

        const empleado = empleados.find(emp => emp.id === id);

        if( empleado )
            resolve( empleado );
        else 
            reject(`No existe el empleado con el id ${id}`);
    } )

    return promesa;
}

const idFind = 4;

getEmpleado( idFind )
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err));

    

