
const getUsuarioByID = (id, callbackImprimirUsuario) => {

    const user = {
        id,
        nombre: 'Fernando'
    }

    setTimeout( () => {
        callbackImprimirUsuario(user)
    }, 1500)

}

getUsuarioByID(10, (usuario) => {
    console.log( usuario.id );
    console.log( usuario.nombre.toUpperCase() );
} );  

