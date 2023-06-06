import { ItemModelDescargar } from "./ItemModelDescargar";

class ModalDescargarArticulo {
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = ` 
        <section class="section-modal-descargar-articulo">
        <div class="modal-descargar-articulo">
            <div class="contenerdor-modal-articulo">
                <div class="header-modal-articulo">
                     <h4>EXTRAs</h4>
                     <div class="boton-cerrar-modal-articulo">×</div>
                </div>
                
                <ul class="ul-model-articulo">
                    <ItemModelDescargar enlace="#" nombre="Pack con todos los artículos" tamano="3911 mb"></ItemModelDescargar>
                    <item-model enlace="#" nombre="Diseño conceptual" tamano="350 mb"></item-model>
                    <item-model enlace="#" nombre="Diseño portada" tamano="626 mb"></item-model>
                    <item-model enlace="#" nombre="pósteres" tamano="1260 mb"></item-model>
                    <item-model enlace="#" nombre="capturas de PANTALLAS" tamano="756 mb"></item-model>
                    <item-model enlace="#" nombre="grafiti de banda" tamano="22 mb"></item-model>
                    <item-model enlace="#" nombre="diseño de steelbook" tamano="37 mb"></item-model>
                    <item-model enlace="#" nombre="fondo de PANTALLAS" tamano="716 mb"></item-model>
                </ul>
            </div>
        </div>
    </section>
        `;
    }
}
window.customElements.define("modal-articulo", ModalDescargarArticulo);