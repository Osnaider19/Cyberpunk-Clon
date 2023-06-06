class ItemModelDescargar extends HTMLElement {
    constructor(){
        super();
        this.enlace = '';
        this.nombre = '';
        this.tamano = '';
    }

    static get observedAttributes(){
        return ["enlace" ,"nombre", "tamano"];
    }


    attributeChangedCallback(nameAtr , oldValue , newValue){
       switch (nameAtr) {
        case "enlace":
            this.enlace = newValue;
        break;
        case "nombre":
            this.nombre = newValue;
        break;
        case "tamano":
            this.tamano = newValue;
        break;
       }
    }  

    connectedCallback(){
        this.innerHTML = ` 
        <a href= "${this.enlace}" >
            <div class="contenedor-li-model-articulo">
                <li class="li-model-articulo">${this.nombre} </li>
                <div class="contenerdor-tamano-articulo"> ${this.tamano} </div>
               <div class="contenerdor-boton-descargar-articulo">
                  <i class="fa-sharp fa-solid fa-arrow-down"></i>
               </div>
            </div>
        </a>
        `;
    }
}

window.customElements.define("item-model", ItemModelDescargar);