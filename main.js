let numeroPregunta = 0;
let preguntas = [
//  ID    NOMBRE    PREGUNTA                DESCRIPCION
    [0, "image0", "Matràs aforat 100 ml", "Generalment s'utilitza per a preparar solucions de concentració coneguda. Solen fabricar-se amb materials de vidre. Té una capacitat de 100 ml"],
    [1, "image1", "Micropipeta 20-200 ul", "S'usa per absorbir i transferir petites quantitats de líquids exactes. Depenen de la quantitat de volum s'usa una micropipeta i una punta diferent. Té una capacitat de 20-200 uL."],
    [2, "image2", "Bureta 25 mL", "Un tub de vidre utilitzat per abocar volums. S'utilitza per fer valoracions. Té una capacitat de 25 mL."],
    [3, "image3", "Vas de precipitats 50 mL", "Material de vidre el qual es pot utilitzar per mesurar inexactament un volum o mantenir un reactiu. Té una capacitat de 50 mL"],
    [4, "image4", "Matràs Erlenmeyer vidre 100 ml", "S'utilitza per mesurar quantitats de líquids o per fer reaccionar substàncies que necessiten un escalfament llarg. Té una capacitat de 100ml"],
    [5, "image5", "Matràs Kitasato vidre 250 mL", "El seu ús principal té a veure amb la separació de compostos que tenen substàncies sòlides, líquides. Té una capacitat de 250 ml"],
    [6, "image6", "Embut de 75 mm", "S'empra per transvasar líquids dins d'un recipient de boca estreta. Té un diàmetre de 75 mm"],
    [7, "image7", "Morter de porcellana", "Els morters s'utilitzen sovint al laboratori per a moldre i barrejar ingredients. En aquest cas el de porcellana"],
    [8, "image9", "Morter de vidre", "Els morters s'utilitzen sovint al laboratori per a moldre i barrejar ingredients. En aquest cas el de vidre es fa servir sovint per materials amb color"],
    [9, "image9", "Pipeta aforada 5 ml", "Material de vidre utilitzat per transferir volums exactes.  Té una capacitat de 5 ml"],
    [10, "image10", "Pipeta graduada 5 ml", "Material de vidre utilitzat per transferir volums. Té una capacitat de 5 ml"],
    [11, "image11", "Tub d'assaig", "És un tub estret i llarg de vidre o plàstic usat per realitzar pràctiques de laboratori amb petits volums de fins a 20 ml aproximadament."],
    [12, "image12", "Termòmetre", "Tub de vidre el qual al reaccionar amb una temperatura el liquid interior puja o baixa. El liquid antigament era de mercuri."],
    [13, "image13", "Càpsula de porcellana 60 mL", "Recipient semicircular fet de porcellana per aguantar altes temperatures i utilitzat per residu sec i/o dessecar papers de filtre. Té una capacitat de 60 mL"],
    [14, "image14", "Vidre de rellotge 80 mm diàm.", "que s'utilitza per mesurar la massa o el pes de productes sòlids. Té un diàmetre de 80 mm"],
    [15, "image15", "Proveta 100 mL", "Un instrument volumètric, que permet mesurar volums grans i ràpidament, encara que amb baixa precisió. Te una capacitat de 100 mL"],

];
let showButton = false
let respostes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let imageID = 0
let resposta = 0
// farem servir aquesta variable per saber la darrera imatge carregada
let numeroimagen=0;
      
      AFRAME.registerComponent('markerhandler0', {
          init: function() {
            // Set up the tick throttling. Will check if marker is active every 500ms
            this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
          },
          tick: function(t, dt) {
            if (document.querySelector("#marca0").object3D.visible == true) {
              // MARKER IS PRESENT
               numeroimagen=0;
               console.log(numeroimagen);
               comprovarResposta(numeroimagen);
                
            }
          }
        });
  
      
      AFRAME.registerComponent('markerhandler1', {
          init: function() {
            // Set up the tick throttling. Will check if marker is active every 500ms
            this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
          },
          tick: function(t, dt) {
            if (document.querySelector("#marca1").object3D.visible == true) {
              // MARKER IS PRESENT
               numeroimagen=1;
               console.log(numeroimagen);
               comprovarResposta(numeroimagen);
            }
          }
        });
      
      
      AFRAME.registerComponent('markerhandler2', {
          init: function() {
            // Set up the tick throttling. Will check if marker is active every 500ms
            this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
          },
          tick: function(t, dt) {
            if (document.querySelector("#marca2").object3D.visible == true) {
              // MARKER IS PRESENT
               numeroimagen=2;
               console.log(numeroimagen);
               comprovarResposta(numeroimagen);
            }
          }
        });
     
       AFRAME.registerComponent('markerhandler3', {
          init: function() {
            this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
          },
          tick: function(t, dt) {
            if (document.querySelector("#marca3").object3D.visible == true) {
              // MARKER IS PRESENT
               numeroimagen=3;
               console.log(numeroimagen);
               comprovarResposta(numeroimagen);
              }
          }
        });
      AFRAME.registerComponent('markerhandler4', {
          init: function() {
            // Set up the tick throttling. Will check if marker is active every 500ms
            this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
          },
          tick: function(t, dt) {
            if (document.querySelector("#marca4").object3D.visible == true) {
              // MARKER IS PRESENT
               numeroimagen=4;
               console.log(numeroimagen);
               comprovarResposta(numeroimagen);
            }
          }
        });
  
      
      AFRAME.registerComponent('markerhandler5', {
          init: function() {
            // Set up the tick throttling. Will check if marker is active every 500ms
            this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
          },
          tick: function(t, dt) {
            if (document.querySelector("#marca5").object3D.visible == true) {
              // MARKER IS PRESENT
               numeroimagen=5;
               console.log(numeroimagen);
               comprovarResposta(numeroimagen);
            }
          }
        });
      
      
      AFRAME.registerComponent('markerhandler6', {
          init: function() {
            // Set up the tick throttling. Will check if marker is active every 500ms
            this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
          },
          tick: function(t, dt) {
            if (document.querySelector("#marca6").object3D.visible == true) {
              // MARKER IS PRESENT
               numeroimagen=6;
               console.log(numeroimagen);
               comprovarResposta(numeroimagen);
            }
          }
        });
     
       AFRAME.registerComponent('markerhandler7', {
          init: function() {
            this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
          },
          tick: function(t, dt) {
            if (document.querySelector("#marca7").object3D.visible == true) {
              // MARKER IS PRESENT
               numeroimagen=7;
               console.log(numeroimagen);
               comprovarResposta(numeroimagen);
              }
          }
        }); 
      
      AFRAME.registerComponent('markerhandler8', {
          init: function() {
            // Set up the tick throttling. Will check if marker is active every 500ms
            this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
          },
          tick: function(t, dt) {
            if (document.querySelector("#marca8").object3D.visible == true) {
              // MARKER IS PRESENT
               numeroimagen=8;
               console.log(numeroimagen);
               comprovarResposta(numeroimagen);
            }
          }
        });
  
      
      AFRAME.registerComponent('markerhandler9', {
          init: function() {
            // Set up the tick throttling. Will check if marker is active every 500ms
            this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
          },
          tick: function(t, dt) {
            if (document.querySelector("#marca9").object3D.visible == true) {
              // MARKER IS PRESENT
               numeroimagen=9;
               console.log(numeroimagen);
               comprovarResposta(numeroimagen);
            }
          }
        });
      
      
      AFRAME.registerComponent('markerhandler10', {
          init: function() {
            // Set up the tick throttling. Will check if marker is active every 500ms
            this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
          },
          tick: function(t, dt) {
            if (document.querySelector("#marca10").object3D.visible == true) {
              // MARKER IS PRESENT
               numeroimagen=10;
               console.log(numeroimagen);
               comprovarResposta(numeroimagen);
            }
          }
        });
     
       AFRAME.registerComponent('markerhandler11', {
          init: function() {
            this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
          },
          tick: function(t, dt) {
            if (document.querySelector("#marca11").object3D.visible == true) {
              // MARKER IS PRESENT
               numeroimagen=11;
               console.log(numeroimagen);
               comprovarResposta(numeroimagen);
              }
          }
        });
   
      AFRAME.registerComponent('markerhandler12', {
          init: function() {
            // Set up the tick throttling. Will check if marker is active every 500ms
            this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
          },
          tick: function(t, dt) {
            if (document.querySelector("#marca12").object3D.visible == true) {
              // MARKER IS PRESENT
               numeroimagen=12;
               console.log(numeroimagen);
               comprovarResposta(numeroimagen);
            }
          }
        });
  
      
      AFRAME.registerComponent('markerhandler13', {
          init: function() {
            // Set up the tick throttling. Will check if marker is active every 500ms
            this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
          },
          tick: function(t, dt) {
            if (document.querySelector("#marca13").object3D.visible == true) {
              // MARKER IS PRESENT
               numeroimagen=13;
               console.log(numeroimagen);
               comprovarResposta(numeroimagen);
            }
          }
        });
      
      
      AFRAME.registerComponent('markerhandler14', {
          init: function() {
            // Set up the tick throttling. Will check if marker is active every 500ms
            this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
          },
          tick: function(t, dt) {
            if (document.querySelector("#marca14").object3D.visible == true) {
              // MARKER IS PRESENT
               numeroimagen=14;
               console.log(numeroimagen);
               comprovarResposta();
            }
          }
        });
     
       AFRAME.registerComponent('markerhandler15', {
          init: function() {
            this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
          },
          tick: function(t, dt) {
            if (document.querySelector("#marca15").object3D.visible == true) {
              // MARKER IS PRESENT
               numeroimagen=15;
               console.log(numeroimagen);
               comprovarResposta();
              }
          }
        });
      
    
      
function comprovarResposta(){
  var resposta=numeroPregunta;
  imageID = numeroimagen;
   console.log("NumeroImagen"+imageID);
   console.log("NumeroPregunta"+respostes[resposta][0])
  if (respostes[resposta] == (""+imageID)){
       document.getElementById("pregunta").innerHTML = "Correcto " + numeroimagen; 
  }else{
      document.getElementById("pregunta").innerHTML = "Incorrecto " + numeroimagen;    
      console.log("Fracaso")
  } 
  setTimeout(ferPregunta, 5000)
}


function ferPregunta(){
  numeroPregunta = Math.floor(Math.random() * 15);
  document.getElementById("pregunta").innerHTML = preguntas[ferPregunta()][2]
  return numeroPregunta;
}
function start(){
  var x = document.getElementById("splash");
  x.style.display = "none";
  preguntas.forEach(e =>{e[2];})
  ferPregunta()
}
setTimeout(start, 6000)
