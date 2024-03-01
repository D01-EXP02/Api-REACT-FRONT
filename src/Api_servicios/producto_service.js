const apiBase = "http://127.0.0.1:8000"

export default function _guardarproducto(Producto){
   return fetch(apiBase + "/Registrar_Productos", {
       method: 'POST',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify(Producto)
   })
   .then(response => response.json())
}