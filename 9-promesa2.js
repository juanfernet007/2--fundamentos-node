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

const idFind = 1;

//PROMESAS INDIVIDUALES
// getEmpleado( idFind )
//     .then(empleado => console.log(empleado.nombre))
//     .catch(err => console.log(err));

// getSalario(idFind)
//     .then(salario => console.log(salario.salario))
//     .catch(error => console.log(error));
    
// getSalarioAnioEntrante(idFind)
//     .then(salario => console.log("salario aumentado: ",salario))
//     .catch(err => console.log(err));

//PROMESAS HELL (Callback hell)
// getEmpleado( idFind )
//     .then(empleado => {
        
//         console.log('Empleado', empleado.nombre, 'encontrado')

//         getSalario(idFind)
//             .then(salario => {

//                 getSalarioAnioEntrante(idFind)
//                 .then(aumento => {
//                     console.log('El empleado', empleado.nombre, 'con el salario', salario.salario, 'Se le aumentará a', aumento );
//                     })
//                 .catch(err => console.log(err));

//             })
//             .catch(error => console.log(error));

//     })
//     .catch(err => console.log(err));

//PROMESAS EN CADENA
let empleadoInterno;
let salarioInterno;
getEmpleado( idFind )
    .then( empleado => {
        empleadoInterno = empleado;
        return getSalario( idFind )
    } )
    .then ( salario => {
        salarioInterno = salario;
        return getSalarioAnioEntrante( idFind )
    })
    .then (aumento => {
        console.log('El empleado', empleadoInterno.nombre, 'con el salario', salarioInterno.salario, 'Se le aumentará a', aumento );
    })
    .catch(err => console.log(err));

    

