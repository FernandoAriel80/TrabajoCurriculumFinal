
// uno box
let idBox1Class1 = document.querySelector('.uno-titulo');
let idBox2Class1 = document.querySelector('.uno-info');

// dos box
let idBox1Class2 = document.querySelector('.dos-titulo');
let idBox2Class2 = document.querySelector('.dos-info');

// tres box
let idBox1Class3 = document.querySelector('.tres-titulo');
let idBox2Class3 = document.querySelector('.tres-info');

// cuatro box
let idBox1Class4 = document.querySelector('.cuatro-titulo');
let idBox2Class4 = document.querySelector('.cuatro-info');

// cinco box
let idBox1= document.querySelector('.tex-datos1');

// seis box
let idBox2= document.querySelector('.tex-datos2');

// siete box
let idBox3= document.querySelector('.tex-datos3');

// ocho box
let idBox4= document.querySelector('.tex-datos4');


// bandera
let click = 1;

// indice de informacion
let contacto = 1;
let conocimientos = 2;
let habilidades = 3;
let idiomas = 4;
let perfil = 5;
let formacion = 6;
let experiencia = 7;
let actualisaciones = 8;

// box carta
//uno box
creaClick(idBox1Class1,idBox2Class1,contacto,click,".uno-info");

//dos box
creaClick(idBox1Class2,idBox2Class2,conocimientos,click,".dos-info");

//tres box
creaClick(idBox1Class3,idBox2Class3,habilidades,click,".tres-info");

//cuatro box
creaClick(idBox1Class4,idBox2Class4,idiomas,click,".cuatro-info");

// bot mas-datos
//uno box
mostrarText(idBox1,perfil);

//dos box
mostrarText(idBox2,formacion);

//tres box
mostrarText(idBox3,experiencia);

//cuatro box
mostrarText(idBox4,actualisaciones);





// Crea evento click y muestra el contenido a elegir donde lo quieran usar. Evento principal.
function creaClick(contenedorActivador,contenedorElegido,TextoElegido,clickActual,cajaAEliminar){

        contenedorActivador.onclick = function expandeClick() {   

              if(clickActual == 1){
                      datosAbre(contenedorElegido);
                      creaElementos(contenedorElegido,datosTexto(TextoElegido));
                      clickActual=0;
              }else if(clickActual == 0){
                      eliminaElementos(cajaAEliminar);
                      datosCierra(contenedorElegido);
                      clickActual=1;
              };
      };
  }

// Solo muestra informacion cuando se lo llama. Evento secundario
function mostrarText(contenedorElegido, TextoElegido){

        creaElementos(contenedorElegido,datosTexto(TextoElegido));  
    }

// efecto de abrir y cerrarse, es llamado por el evento principal.
function datosAbre(idElegido){

        idElegido.style.transitionDuration = '0.5s'
        idElegido.style.width = 'auto';
        idElegido.style.height= 'auto';
        idElegido.style.padding = '10px'
        idElegido.style.opacity = '1';
}

function datosCierra(idElegido){

        idElegido.style.opacity = '0';
        idElegido.style.transitionDuration = '0.5s'
        idElegido.style.width = '200px';
        idElegido.style.height= '0px';
}

// Crea el elemento Lista para acomodar la informacion en una lista, para luego borrarla, es llamado por el evento principal o el secundario.
function creaElementos(contenedor,arrayDeTexto){

        let cantidadItems = arrayDeTexto.length;
        const fragmento = document.createDocumentFragment();
        for (let i = 0; i < cantidadItems; i++) {
                const item = document.createElement("LI");
                item.innerHTML = arrayDeTexto[i];
                fragmento.appendChild(item);
                 
         }
         contenedor.appendChild(fragmento);
}

function eliminaElementos(caja){

        var listElements = document.querySelectorAll( caja +" li");
        for (var i = 0; (li = listElements[i]); i++) {
          li.parentNode.removeChild(li);
        }
        
}

// Guarda un array de datos para ser elegido y usado en la funcion creaElementos(), es llamado por el evento principal.
function datosTexto(texElegido){
        
        if(texElegido == 1){

                let textContacto = ["22 años",
                   "Nacionalidad Mexicana ", 
                   "13 de Diciembre de 1999", 
                   "(55)1234-5678",
                   "hola@sitioincreible.com",
                   "Pedro Sullivan en Facebook",
                   "Calle Cualquiera 123, cualquier lugar, C.P. 12345"
                   ];
                return textContacto;

        }else if(texElegido == 2){

                let textConocimientos = ["Costos",
                   "Finanzas", 
                   "13 de Diciembre de 1999", 
                   "Estados Financieros",
                   "Normatividad"
                   ];
                return textConocimientos;

        }else if(texElegido == 3){

                let textHabilidades = ["Pro activo",
                   "Capacidad de trabajo en equipo ", 
                   "Mente abierta", 
                   "Resolucion de problemas",
                   "Capaciad de adaptación"
                   ];
                return textHabilidades;

        }else if(texElegido == 4){

                let textIdiomas = ["Ingles principalmente A2"
                   ];
                return textIdiomas;

        }else if(texElegido == 5){

                let textPerfil = ["Estudiante de 7° semestre de la carrera "+
                   "de contaduria, con conocimientos "+ 
                   "básicos en costos, finanzas, contabilidad "+ 
                   "general, entre otros. Con disposición por "+
                   "seguir aprendiendo y trabajar."
                   ];
                return textPerfil;

        }else if(texElegido == 6){

                let textFormacion = ["licenciatura en contaduria (estudiante)",
                   "Universidad Nacional Autonoma (2019-actualmente) ", 
                   ];
                return textFormacion;

        }else if(texElegido == 7){

                let textExperiencia = ["Empresa (2018)",
                   "Ayudante general ", 
                   "Atención al cliente ", 
                   "Trabajo bajo presión",
                   "Resolución de problemas"
                   ];
                return textExperiencia;

        }else if(texElegido == 8){

                let textActualisaciones = ["Mis investigaciones en la bolsa iniciaron en 2022"
                   ];
                return textActualisaciones;
        }
}

