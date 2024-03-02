import { useEffect, useState } from "react";
import "../page_filtro/filtro.css"
import { _filtrocliente } from "../../Api_servicios/cliente_service"

export default function Page_filtro() {

    const [filtrocliente, setFiltrocliente] = useState([])
    const [clientes, setClientes] = useState([])
    const [input, setInput] = useState('')
  
    useEffect( () => {
      obtenerfiltrocliente()
    }, [])
    
    function obtenerfiltrocliente(){
        _filtrocliente().then(clientes => {
            setClientes(clientes)
            setFiltrocliente(clientes)
      })
    }
  
    function obtenerfiltroclientes(e){
      setInput(e.target.value)
      const filtro = e.target.value.toLowerCase();
      setFiltrocliente(clientes.filter(clientela => clientela.identificacion.toLowerCase().includes(filtro)));
    }

    return(
        <>
                <div id="contenedorPrincipal">
                <span><b>Buscar</b></span>
                <input placeholder="Filtrar por Identificacion..." value={input} type="text" onChange={e => obtenerfiltroclientes(e)}/>
                <section id="seccionDatos">
                    <table id="tablaDatos">
                        <thead>
                            <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Identificacion</th>
                            <th>Fecha nacimiento</th>
                            <th>Sexo</th>
                            <th>producto</th>
                            <th>valor</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                            filtrocliente.map(item => 
                                <tr key={item.nombre}>
                                <td>{item.nombre}</td>
                                <td>{item.apellido}</td>
                                <td>{item.identificacion}</td>
                                <td>{item.fecha_nacimiento}</td>
                                <td>{item.sexo}</td>
                                <td>{item.nombre_producto}</td>
                                <td>{item.valor}</td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </section>
            </div>
        </>
    )

}