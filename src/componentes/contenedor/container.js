import Page_Inicio from "../page_inicio/inicio";
import Page_consulta from "../page_consulta/consulta"
import Page_filtro from "../page_filtro/filtro"
import Page_GuardarProducto from "../page_producto/guardarProducto"


export default function Container({option}){
    switch(option){
        case 0:
            return <Page_Inicio />
        case 1:
            return <Page_consulta/>
        case 2: 
            return <Page_filtro/>
        case 3:
            return <Page_GuardarProducto/>
        default:
              return <alert><span>No existe el contenedor</span></alert>;
    }
}   
