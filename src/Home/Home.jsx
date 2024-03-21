import "./Home.css"

import { inventario } from "../utils/medicamentos"

export function Home(){

    //ZONA DE MANIPULACION DE DATOS
    let nombrePaciente="Juan Jose Gallego"
    let sedePaciente="Suramericana"
    console.log(inventario)

    //A LOS ARREGLOS LOS PUEDO MANIPULAR
    //PARA CONTROLAR QUE INFORMACION VOY A PRESENTAR

    //1. FUNCION DE FILTRADO DE DATOS
    //CONDICION DE FILTRADO (PREGUNTA (SI/NO))
    let resultado=inventario.filter(function(auxiliar){
        return(auxiliar.nombre=="acetaminofen")
    })
    console.log(resultado)

    return( //zona de renderizado
        <>
            <section className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h3 className="fuente">Servicios a un clic</h3>
                        <h2 className="text-muted">HOLA <span className="fuente">{nombrePaciente}</span></h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque delectus nesciunt tenetur error nostrum enim quam corrupti praesentium, facere quasi mollitia accusamus, modi rem reprehenderit ad incidunt excepturi tempore, quia neque officia doloribus. Facilis excepturi qui minus consectetur illum numquam, magni soluta, dolor ducimus culpa veritatis vel dignissimos, consequuntur aliquam?</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <select class="form-select">
                            <option selected>Tu Grupo Familiar</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        
                        <div className="row">
                            <div className="col-12 col-md-2 mt-5">
                                <i class="bi bi-person-circle fs-1 fuente"></i>
                            </div>
                            <div className="col-12 col-md-10 mt-5">
                                <br />
                               <p>FERNANDO FERNANDEZ FERRERIA</p> 
                            </div>
                        </div>

                        
                       

                    </div>
                </div>
            </section>
        </>
    )
}