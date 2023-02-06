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
        id : 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
]

const getEmpleado = ( id ) => {

    return new Promise( (resolve, reject) => {

        const empleado = empleados.find(emp => emp.id === id);

        ( empleado ) 
            ? resolve( empleado ) 
            : reject(`No existe el empleado con el id ${id}`); 
         
    } )

}

const getSalario = ( id ) => {

    return new Promise ( (resolver, rechazar)  => {
        const salario = salarios.find( sal => sal.id === id);
        salario ? resolver(salario) : rechazar(`No existe el salario con id ${id}`);
    })

}

const getSalarioAnioEntrante = ( id ) => {

    return new Promise ((resolve, reject) => {
      const sal = salarios.find((s) => { return s.id === id});
      if(sal != null) 
        resolve(sal.salario * 1.10);
      else 
        reject(`No es posible realizar un aumento a un salario inexistente.`);
    });

}


//las funciones async automáticamente se convierten en una promesa, 
//es como si retornaran al interior un return new Promise
//por lo tanto podrá generar un resolve si devuelven bien o reject 
//por eso se podrá usar el then y el cath luego
const getInfoUsuario = async ( id ) => {
    try {
        //el await solo se puede usar dentro de una función asíncrona 
        //(es decir que devuelva una promesa)
        const empleado = await getEmpleado( id );
        const salario = await getSalario( id );
        const aumento = await getSalarioAnioEntrante( id );

        return `El empleado ${empleado.nombre} con el salario ${salario.salario}, Se le aumentará a ${aumento} `;
    
    } catch (error) {
        //al llamar el throw se llamara al reject de la función async
        throw error;
    }    
}

let idFind = 3;
//como getInfoUsuario es una promesa entonces se puede usar el then y catch
getInfoUsuario ( idFind )
    .then ( mensaje => console.log( mensaje ))
    .catch( err => console.log( err ));

