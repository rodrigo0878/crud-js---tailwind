
 


//ponemos la url de la api
const url= 'http://localhost:4000/clientes';


//exportamos a los clientes a la api
//cuando se crea un nuevo cliente
//el arrow function toma el clietede la api
export const nuevoCliente = async cliente => {
    try {
        await fetch(url, {
            method: 'POST', 
            body: JSON.stringify(cliente), // data puede ser string o un objeto
            headers:{
              'Content-Type': 'application/json' // Y le decimos que los datos se enviaran como JSON
            }
        });

        window.location.href = "index.html"
    } catch (error) {
        console.log(error);
    }
}

//export const ... function expretion



//obtener todos los clientes
export const obtenerClientes = async () => {
    try {
        //console.log('desde el try del promise')
        //por default fech envia una peticion GET
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        // y finalmente un retun de clientes
        return clientes;

    } catch (error) {
        console.log(error)
    }
}



//eliminar un Cliente
export const eliminarCliente = async id => {

    try {

        //inyectamos el id a la url
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error)
    }
    
}


//obtiene un cliente por su id

export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();

        return cliente;
        //console.log(cliente)
    } catch (error) {
        console.log(error)
    }
}



//actualizar un registro

   
    
        
           
            
    



export const editarCliente = async cliente => {
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT', 
            body: JSON.stringify(cliente), // data puede ser string o un objeto
            headers:{
              'Content-Type': 'application/json' // Y le decimos que los datos se enviaran como JSON
            }
        });

        window.location.href = "index.html"
    } catch (error) {
        console.log(error);
    }
}


