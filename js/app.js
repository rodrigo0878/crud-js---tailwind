//importamos y abrimos llaves porque noe es export default
//import { obtenerClientes , eliminarCliente} from '../js/API.js';

require('dotenv').config();

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`servidor corriendo en el puerto${process.env.PORT}`)
})





//protejemos las  variuables con functify
(function(){

    const listado = document.querySelector('#listado-clientes');

    //registramos un evento
    document.addEventListener('DOMContentLoaded', mostrarClientes);

    //borrar registros del dom
    listado.addEventListener('click', confirmarEliminar);

    function confirmarEliminar(e){

        if(e.target.classList.contains('eliminar')){


            //lee los id como enteros debemos pasarlos a numeros
            const clienteId =  parseInt(e.target.dataset.cliente);

            const confirmar = confirm('¿Desea Eliminar El Registro?');
            if(confirmar){
               eliminarCliente(clienteId)
            }

            //console.log(clienteId)
            //console.log('diste click')
        }






    }

    async function mostrarClientes(){
        const clientes =  await obtenerClientes();

        //console.log(clientes)

        /*como es un arreglo lo recorremos con:
        
                array.forEach(element => {
            
        });

        */

        clientes.forEach( cliente => {

            //console.log(cliente)

            //con destruction sacamos los valores y creamos las variables que usaremos ,,,

            const { nombre, email, telefono, empresa, id} = cliente;

            const row = document.createElement('tr');

            //sacamos el codigo de
            row.innerHTML += `
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                <p class="text-sm leading-10 text-gray-700"> ${email} </p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                <p class="text-gray-700">${telefono}</p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                <p class="text-gray-600">${empresa}</p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
            </td>
        `;


        listado.appendChild(row);
            
        });


    }








})();