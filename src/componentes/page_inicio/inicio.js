import "../page_inicio/inicio.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cliente } from "../../clases/clientes";
import { _guardarcliente }  from "../../Api_servicios/cliente_service"
import { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2'

export default function Page_Inicio() {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [identificacion, setIdentificacion] = useState('')
    const [sexo, setSexo] = useState('')
    const [fecha_nacimiento, setFecha_nacimiento] = useState('')


    function guardarClientes(){
        let clienteNuevo = new Cliente(
            nombre,
            apellido,
            identificacion,
            sexo,
            fecha_nacimiento
        )

        _guardarcliente(clienteNuevo).then(mensaje =>{
            Swal.fire({
                title: "Guardar",
                text: "El cliente se registro exitosamente!",
                icon: "success"
            })
        })
        

    }


    return(
        <>
            <div id="contenedor">
                <Form class="formulario row g-3">
                    <div class="campos col-md-6">
                        <label for="inputEmail4" class="form-label">Nombre</label>
                        <input 
                        type="text" value={nombre} 
                        onChange={(e)=> setNombre(e.target.value)} class="form-control" 
                        id="inputEmail4" placeholder="Su nombre"/>
                    </div>
                    <div class="campos col-md-6">
                        <label for="inputPassword4" class="form-label">Apellido</label>
                        <input type="text" value={apellido} 
                        onChange={(e)=> setApellido(e.target.value)} 
                        class="form-control" id="inputPassword4" 
                        placeholder="Su apellido"/>
                    </div>
                    <div class="campos col-12">
                        <label for="inputAddress" class="form-label">Identificación</label>
                        <input type="text" value={identificacion} 
                        onChange={(e)=> setIdentificacion(e.target.value)}
                        class="form-control" id="inputAddress" 
                        placeholder="Digite su Documento"/>
                    </div>
                    <div class="campos col-12">
                        <label for="inputAddress2" class="form-label">Fecha de nachimiento</label>
                        <input type="date" value={fecha_nacimiento} 
                        onChange={(e)=> setFecha_nacimiento(e.target.value)}
                        class="form-control" id="inputAddress2"/>
                    </div>
    
                    <div class="campos col-md-4">
                        <label for="inputState" class="form-label">Sexo</label>
                        <select id="inputState" value={sexo} 
                        onChange={(e)=> setSexo(e.target.value)} 
                        class="form-select">
                        <option selected>masculino</option>
                        <option>femenino</option>
                        <option>otros...</option>
                        </select>
                    </div>
                    <div class="btn_enviar col-12">
                        <button onClick={guardarClientes} class="btn btn-primary">Registrar</button>
                    </div>
                </Form>
            </div>
        </>
    )

}