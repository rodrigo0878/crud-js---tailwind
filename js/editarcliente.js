import { obtenerCliente , editarCliente } from './API.js'
import { mostrarAlerta, validar } from './funciones.js';

(function() {


                const nombreinput = document.querySelector('#nombre');
                const emailinput = document.querySelector('#email');
                const telefonoinput = document.querySelector('#empresa');
                const empresainput = document.querySelector('#telefono');
                const idinput = document.querySelector('#id');

            document.addEventListener('DOMContentLoaded', async () => {
                //parametros url
                const parametrosURL = new URLSearchParams(window.location.search);

                const idCliente = parseInt( parametrosURL.get('id'))


                const cliente = await obtenerCliente(idCliente)

                mostrarClientes(cliente)

                //submit al formulario
                const formulario = document.querySelector('#formulario');
                formulario.addEventListener('submit', validarCliente)

            })


            function validarCliente(e){
                e.preventDefault();
                


                
             //validamos los datos con nueva tecnica para validar, con objet literal con hansel

                const cliente = {
                    nombre:nombreinput.value,
                    email:emailinput.value,
                    telefono:telefonoinput.value,
                    empresa:empresainput.value,
                    id: parseInt(idinput.value)
                }

                //console.log(cliente)
                
                //para leer los valores del objeto
                //console.log(Object.values(cliente).every( input => input !== ''));

                
                

                if (validar(cliente)){
                    //mostrar mensaje
                    //console.log('todos los campos son obligatorios')
                    mostrarAlerta('todos los campos son obligatorios')
                    return;
                }


                //console.log(cliente)
                editarCliente(cliente)
            }    


            function mostrarClientes(cliente){

                const { nombre, email, telefono, empresa, id} = cliente;

                //console.log(nombre, email)

                //

                
                nombreinput.value = nombre;
                emailinput.value = email;
                empresainput.value = empresa;
                telefonoinput.value = telefono;
                
                idinput.value = id ;
                



            }


}) ();