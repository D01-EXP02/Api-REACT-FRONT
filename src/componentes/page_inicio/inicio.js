import "../page_inicio/inicio.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cliente } from "../../clases/clientes";
import { _guardarcliente }  from "../../Api_servicios/cliente_service"
import { useState } from "react";
import { Form } from 'react-bootstrap';
import Swal from 'sweetalert2'

export default function Page_Inicio() {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [identificacion, setIdentificacion] = useState('')
    const [sexo, setSexo] = useState('masculino')
    const [fecha_nacimiento, setFecha_nacimiento] = useState('')


    function guardarcliente(){

        if (!nombre || !apellido || !identificacion || !sexo || !fecha_nacimiento) {
            Swal.fire({
                title: "Error",
                text: "Por favor, complete todos los campos.",
                icon: "error"
            });
            return;
        }

        let clienteNuevo = new Cliente(
            nombre,
            apellido,
            identificacion,
            fecha_nacimiento,
            sexo
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
                        <label class="form-label">Nombre</label>
                        <input  value={nombre} 
                        onChange={(e)=> setNombre(e.target.value)} class="form-control" 
                         placeholder="Su nombre"/>
                    </div>
                    <div class="campos col-md-6">
                        <label  class="form-label">Apellido</label>
                        <input  value={apellido} 
                        onChange={(e)=> setApellido(e.target.value)} 
                        class="form-control" 
                        placeholder="Su apellido"/>
                    </div>
                    <div class="campos col-12">
                        <label  class="form-label">Identificación</label>
                        <input  value={identificacion} 
                        onChange={(e)=> setIdentificacion(e.target.value)}
                        class="form-control" 
                        placeholder="Digite su Documento"/>
                    </div>
                    <div class="campos col-12">
                        <label  class="form-label">Fecha de nachimiento</label>
                        <input type="date" value={fecha_nacimiento} 
                        onChange={(e)=> setFecha_nacimiento(e.target.value)}
                        class="form-control" id="inputAddress2"/>
                    </div>
    
                    <div class="campos col-md-4">
                        <label  class="form-label">Sexo</label>
                        <select  value={sexo} 
                        onChange={(e)=> setSexo(e.target.value)} 
                        class="form-select">
                        <option>masculino</option>
                        <option>femenino</option>
                        <option>otros...</option>
                        </select>
                    </div>
                    <div class="btn_enviar col-12">
                        <button onClick={guardarcliente} class="btn btn-primary">Registrar</button>
                    </div>
                </Form>
            </div>
        </>
    );

}