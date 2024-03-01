import '../page_producto/guardarProducto.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

export default function Page_GuardarProducto() {
    return(
        <>
         <div id="contenedor">
                <Form class="formulario row g-3">
                    <div class="campos col-md-12">
                        <label for="inputEmail4" class="form-label">Nombre del Producto</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Digite nombre del producto"/>
                    </div>
                    <div class="campos col-md-12">
                        <label for="inputPassword4" class="form-label">Valor</label>
                        <input type="text" class="form-control" id="inputPassword4" placeholder="Digite costo del producto"/>
                    </div>
                    <div class="campos col-12">
                        <label for="inputAddress" class="form-label">Identificación</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="Digite su Documento"/>
                    </div>
                    <div class="btn_enviar col-12">
                        <Button type="submit" class="btn btn-primary">Registrar</Button>
                    </div>
                </Form>
            </div>
        </>
    )

}