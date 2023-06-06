  //funcion de scroll de la seccion de videos de los trailes de cyberpunk 


  //scroll adenlate 
  const containerTrailer = document.querySelector('.ul-contenedor-carousel');
  const scrollLeftButtonTrailer = document.getElementById('button-back');
  const scrollRightButtonTrailer = document.getElementById('button-next');
  scrollLeftButtonTrailer.style.opacity = 0.3;
  scrollLeftButtonTrailer.addEventListener('click', () => {
    updateButtonTrailer();
    containerTrailer.scrollLeft -= 520;
    console.log(containerTrailer.scrollLeft);
    scrollRightButtonTrailer.style.opacity = 1;
  });
  

  // scroll atras

  scrollRightButtonTrailer.addEventListener('click', () => {
    updateButtonTrailer();
    containerTrailer.scrollLeft += 520;
    console.log(containerTrailer.scrollLeft);
    scrollLeftButtonTrailer.style.opacity = 1;
  });
 
  //actualizar el la opacidad de los botones 
  function updateButtonTrailer() {
    if (containerTrailer.scrollLeft <= 520) {
      scrollLeftButtonTrailer.style.opacity = 0.3;
    } else {
      scrollLeftButtonTrailer.style.opacity = 1;
    }
    
    if (containerTrailer.scrollLeft + containerTrailer.clientWidth === containerTrailer.scrollWidth) {
      scrollRightButtonTrailer.style.opacity = 0.3;
    } else {
      scrollRightButtonTrailer.style.opacity = 1;
    }
  }
  
/// para no poder arrastrar las imgenes
  document.addEventListener('dragstart', function(evt) {
    if (evt.target.tagName == 'IMG') {
      evt.preventDefault();
    }
  });




/// funcion de el nav de muntimedia 
let buttonVideos = document.getElementById('button-videos');
let buttonCapturas = document.getElementById('button-capturas');
let buttonFondos = document.getElementById('button-fondos');
let buttonArte = document.getElementById('button-arte-conceptual');


let contenedorVideos = document.querySelector('.section-video');
let seccionCapturasPantallas = document.querySelector('.section-capturas-pantalla');
let fondoPantalla = document.querySelector('.section-fondo-pantalla');
buttonVideos.addEventListener('click', ()=>{
    buttonCapturas.classList.remove('activo')
    buttonFondos.classList.remove('activo');
    buttonArte.classList.remove('activo');
    buttonVideos.classList.add('activo');
    contenedorVideos.style.display = 'block';
    seccionCapturasPantallas.style.display = 'none';
    fondoPantalla.style.display = 'none';
  });
buttonCapturas.addEventListener('click', ()=>{
  buttonVideos.classList.remove('activo');
  buttonFondos.classList.remove('activo');
  buttonArte.classList.remove('activo');
  buttonCapturas.classList.add('activo');
  contenedorVideos.style.display = 'none';
   fondoPantalla.style.display = 'none';
  seccionCapturasPantallas.style.display = 'block';
});
buttonFondos.addEventListener('click', ()=>{
    buttonVideos.classList.remove('activo');
    buttonCapturas.classList.remove('activo');
    buttonArte.classList.remove('activo');
    buttonFondos.classList.add('activo');
    contenedorVideos.style.display = 'none';
    seccionCapturasPantallas.style.display = 'none';
    fondoPantalla.style.display = "block";
  });


//FUNCION SCROLL DE LA SECCION WIRE 


const imageContainer = document.getElementById('div-wire-overflow');
const scrollLeftButton = document.getElementById('button-wire-back');
const scrollRightButton = document.getElementById('button-wire-next');
scrollLeftButton.style.opacity = .3;
scrollLeftButton.addEventListener('click', () => {
  updateButtonOpacity();
  scrollRightButton.style.opacity = 1;
  imageContainer.scrollLeft -= 270;
  console.log(imageContainer.scrollLeft);
});

scrollRightButton.addEventListener('click', () => {
  updateButtonOpacity();
  scrollLeftButton.style.opacity = 1;
  imageContainer.scrollLeft += 270;
  console.log(imageContainer.scrollLeft);
  
});

function updateButtonOpacity() {
  if (imageContainer.scrollLeft <= 270) {
    scrollLeftButton.style.opacity = .3;
  } else {
    scrollLeftButton.style.opacity = 1;
  }
  
  if (imageContainer.scrollLeft + imageContainer.clientWidth === imageContainer.scrollWidth) {
    scrollRightButton.style.opacity = .3;
  } else {
    scrollRightButton.style.opacity = 1;
  }
}


/// FUNCION DE MOSTRAR MODAL DE LA SECCION DE EPISODEOS 


//mostrar model episodio 6 
let modal = document.querySelector('.section-modal-episodios');
let ep6 = document.getElementById('ep6');
let botonCerrarModal = document.querySelector('.boton-cerrar-modal');
let iframe = document.querySelector('.iframe');
let contenedorIframe = document.querySelector('.contenedor-iframe');
ep6.addEventListener('click', ()=>{
  modal.style.display = 'block';
  contenedorIframe.classList.add('animacion-contenedor-modal');
  document.documentElement.style.overflow = 'hidden'; // Para el elemento html
  document.body.style.overflow = 'hidden'; 
  iframe.setAttribute('src', iframe.getAttribute('data-src'));
  
});
botonCerrarModal.addEventListener('click', ()=>{
  modal.style.display = 'none';
  document.documentElement.style.overflow = 'auto'; // Para el elemento html
  iframe.setAttribute('src', '');
})

let ep5 = document.getElementById('ep5');
ep5.addEventListener('click', ()=>{
  modal.style.display = 'block';
  contenedorIframe.classList.add('animacion-contenedor-modal');
  document.documentElement.style.overflow = 'hidden'; // Para el elemento html
  document.body.style.overflow = 'hidden'; 
  iframe.setAttribute('src', iframe.getAttribute('data-src'));
  
});

let ep4 = document.getElementById('ep4');
ep4.addEventListener('click', ()=>{
  modal.style.display = 'block';
  contenedorIframe.classList.add('animacion-contenedor-modal');
  document.documentElement.style.overflow = 'hidden'; // Para el elemento html
  document.body.style.overflow = 'hidden'; 
  iframe.setAttribute('src', iframe.getAttribute('data-src'));
  
});

let ep3 = document.getElementById('ep3');
ep3.addEventListener('click', ()=>{
  modal.style.display = 'block';
  contenedorIframe.classList.add('animacion-contenedor-modal');
  document.documentElement.style.overflow = 'hidden'; // Para el elemento html
  document.body.style.overflow = 'hidden'; 
  iframe.setAttribute('src', iframe.getAttribute('data-src'));
  
});

let ep2 = document.getElementById('ep2');
ep2.addEventListener('click', ()=>{
  modal.style.display = 'block';
  contenedorIframe.classList.add('animacion-contenedor-modal');
  document.documentElement.style.overflow = 'hidden'; // Para el elemento html
  document.body.style.overflow = 'hidden'; 
  iframe.setAttribute('src', iframe.getAttribute('data-src'));
  
});


let ep1 = document.getElementById('ep1');
ep1.addEventListener('click', ()=>{
  modal.style.display = 'block';
  contenedorIframe.classList.add('animacion-contenedor-modal');
  document.documentElement.style.overflow = 'hidden'; // Para el elemento html
  document.body.style.overflow = 'hidden'; 
  iframe.setAttribute('src', iframe.getAttribute('data-src'));
  
});



/*FUNCION MOSTRAR MODAL DESCARGAR ARTICULO GRATUITO */

let btnCerrarModalDescarga = document.querySelector('.boton-cerrar-modal-articulo');
let modalDescargarArticulo = document.querySelector('.section-modal-descargar-articulo');

let mostrarArticulo = document.querySelector('.btn-mostrar-articulo');
mostrarArticulo.addEventListener('click', (e)=>{
  e.preventDefault();
  
  modalDescargarArticulo.style.display = 'block';
  document.documentElement.style.overflow = 'hidden'; // Para el elemento html
  document.body.style.overflow = 'hidden';
})

/*FUNCION OCULTAR MODAL DE DESCARGAR ARTICULO */

btnCerrarModalDescarga.addEventListener('click', ()=>{
  modalDescargarArticulo.style.display = 'none';
  document.documentElement.style.overflow = 'auto';
})




//obtener los valores de los campos email y el texto que se renderizará segun lo que el usuario ingrese
const emailInput =  document.querySelector('.input-email');
let text = document.querySelector('.label-email');
let expReg ;

//verificar si un email ingresado por es usuario  es valido 
  function validarEmail(email=""){
  
  if(typeof email !== "string") return 
  expReg =  /[a-z0-9]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

  if((emailInput.value) !== "" && (!expReg)){

    text.classList.add("label-email-error");
    text.innerHTML = `Porporciona una dirrección de correo correcta`;

  }else{

    text.innerHTML = "introduzca tu dirreccion de correo electrónico";
    text.classList.remove("label-email-error");
  }

}



//obetener los campos de el boton enviar y el input check
let check = document.querySelector('.chechbox-mayor');
let button = document.querySelector('.div-boton');

//validar si el que el ususario quiera resivir mayor y que el email sea valido
function validarEmailECheck() {
    if((expReg) && (check.checked)){
      button.classList.remove('boton-desactivado');
    }else{
      button.classList.add('boton-desactivado');
    }
}

//evento de check en el input check
check.addEventListener('change', ()=>{
  validarEmailECheck()
});


//llamar la funciones de validaemail y validaremailecheck para verificar si los datos son correctos o incorrectos
emailInput.addEventListener('input', (e)=>{
  validarEmail(e.target.value);
    validarEmailECheck();
});



