import { mostrarAlerta, validar } from './funciones.js';
import {  nuevoCliente } from './API.js'


(function(){

    


    console.log('desde functionalis')
    //tomamos el documnet del dom
    const formulario = document.querySelector('#formulario');

    //creamos el addevent listener que va a escuchar el submit del formulario
    formulario.addEventListener('submit', validarCliente);


    function validarCliente(e){
        e.preventDefault();
        

        //leeeemos los datos de las variables que se ingresan al formulario
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;
    
    
            //validamos los datos con nueva tecnica para validar, con objet literal con hansel

            const cliente = {
                nombre,
                email,
                telefono,
                empresa
            }
            
            //para leer los valores del objeto
            //console.log(Object.values(cliente).every( input => input !== ''));

            
            

            if (validar(cliente)){
                //mostrar mensaje
                //console.log('todos los campos son obligatorios')
                mostrarAlerta('todos los campos son obligatorios')
                return;
            }



            //console.log(cliente)
            nuevoCliente(cliente);
    
    
    }


   

   

})();