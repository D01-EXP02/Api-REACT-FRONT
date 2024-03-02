import "../page_consulta/consulta.css"
import  _todosclientes from "../../Api_servicios/cliente_service"
import { useState, useEffect } from "react"

export default function Page_consulta() {
    const [clientes, setClientes] = useState([])

    useEffect( () => {
        obtener_cliente()
      }, [])

    function obtener_cliente(){
        _todosclientes().then(clientes => {
            setClientes(clientes)
        })
      }

    return(
        <>
        <div id="contenedor-main">
        <section id="seccionDatos">
        <table id="tablaDatos">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Identificacion</th>
              <th>Fecha nacimiento</th>
              <th>Sexo</th>
            </tr>
          </thead>
          <tbody>
            {
                clientes.map(item =>
                    <tr key={item.nombre}>
                        <td>{item.nombre}</td>
                        <td>{item.apellido}</td>
                        <td>{item.identificacion}</td>
                        <td>{item.fecha_nacimiento}</td>
                        <td>{item.sexo}</td>
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