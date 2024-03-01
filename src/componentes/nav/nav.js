import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css'


export default function Nav({setOption}){

    function routes(pagina){
        setOption(pagina)
    }

    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand"onClick={() => routes(0)}>Registro Clientes</a>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page"onClick={() => routes(1)}>Consultar</a>
                        <a class="nav-link active" onClick={() => routes(2)}>Filtrar</a>
                        <a class="nav-link active" onClick={() => routes(3)}>Registrar Producto</a>
                    </div>
                 </div>
            </div>
        </nav>
        </>
    )
}