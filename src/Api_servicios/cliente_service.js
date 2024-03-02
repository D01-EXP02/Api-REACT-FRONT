 const apiBase = "http://127.0.0.1:8000"

 export default function _todosclientes(){
   return fetch(apiBase + "/Consultar_ALL_clientes")
   .then(response => response.json())
}

 export function _guardarcliente(Cliente){
    return fetch(apiBase + "/Guardar_cliente", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(Cliente)
    })
    .then(response => response.json())
 }

   console.log(apiBase + "/Guardar_cliente");

 export function _filtrocliente(){
    return fetch(apiBase + "/Consultar_clientes_por_Producto")
    .then(response => response.json())
 }