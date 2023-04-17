let numeroPregunta = 0;

let preguntas = [
//  ID    NOMBRE    PREGUNTA                DESCRIPCION
    [0, "image0", "Matràs aforat 100 ml", "Generalment s'utilitza per a preparar solucions de concentració coneguda. Solen fabricar-se amb materials de vidre. Té una capacitat de 100 ml"],
    [1, "image1", "Matràs aforat 250 ml", "Generalment s'utilitza per a preparar solucions de concentració coneguda. Solen fabricar-se amb materials de vidre. Té una capacitat de 250 ml"],
    [2, "image2", "Matràs aforat 500 ml", "Generalment s'utilitza per a preparar solucions de concentració coneguda. Solen fabricar-se amb materials de vidre. Té una capacitat de 500 ml"],
    [3, "image3", "Micropipeta 20-200 ul", "S'usa per absorbir i transferir petites quantitats de líquids exactes. Depenen de la quantitat de volum s'usa una micropipeta i una punta diferent. Té una capacitat de 20-200 uL."],
    [4, "image4", "Micropipeta 100-1000 ul", "S'usa per absorbir i transferir petites quantitats de líquids exactes. Depenen de la quantitat de volum s'usa una micropipeta i una punta diferent. Té una capacitat de 100-1000 uL."],
    [5, "image5", "Micropipeta 1-5 ml", "S'usa per absorbir i transferir petites quantitats de líquids exactes. Depenen de la quantitat de volum s'usa una micropipeta i una punta diferent. Té una capacitat de 1-5ml."],
    [6, "image6", "Bureta 25 mL", "Un tub de vidre utilitzat per abocar volums. S'utilitza per fer valoracions. Té una capacitat de 25 mL."],
    [7, "image7", "Proveta 100 mL", "Un instrument volumètric, que permet mesurar volums grans i ràpidament, encara que amb baixa precisió. Te una capacitat de 100 mL"],
    [8, "image8", "Vas de precipitats 50 mL", "Material de vidre el qual es pot utilitzar per mesurar inexactament un volum o mantenir un reactiu. Té una capacitat de 50 mL"],
    [9, "image9", "Vas de precipitats 100 mL", "Material de vidre el qual es pot utilitzar per mesurar inexactament un volum o mantenir un reactiu. Té una capacitat de 100 mL"],
    [10, "image10", "Vas de precipitats de 250 mL", "Material de vidre el qual es pot utilitzar per mesurar inexactament un volum o mantenir un reactiu. Té una capacitat de 250 mL"],
    [11, "image11", "Matràs Erlenmeyer vidre 100 ml", "S'utilitza per mesurar quantitats de líquids o per fer reaccionar substàncies que necessiten un escalfament llarg. Té una capacitat de 100ml"],
    [12, "image12", "Matràs Erlenmeyer vidre 250 ml", "S'utilitza per mesurar quantitats de líquids o per fer reaccionar substàncies que necessiten un escalfament llarg. Té una capacitat de 250ml"],
    [13, "image13", "Matràs Kitasato vidre 250 mL", "El seu ús principal té a veure amb la separació de compostos que tenen substàncies sòlides, líquides. Té una capacitat de 250 ml"],
    [14, "image14", "Embut de 75 mm", "S'empra per transvasar líquids dins d'un recipient de boca estreta. Té un diàmetre de 75 mm"],
    [15, "image15", "Embut de 100 mm", "S'empra per transvasar líquids dins d'un recipient de boca estreta. Té un diàmetre de 100 mm"],
    [16, "image16", "Morter de porcellana", "Els morters s'utilitzen sovint al laboratori per a moldre i barrejar ingredients. En aquest cas el de porcellana"],
    [17, "image17", "Morter de vidre", "Els morters s'utilitzen sovint al laboratori per a moldre i barrejar ingredients. En aquest cas el de vidre es fa servir sovint per materials amb color"],
    [18, "image18", "Pipeta aforada 5 ml", "Material de vidre utilitzat per transferir volums exactes.  Té una capacitat de 5 ml"],
    [19, "image19", "Pipeta aforada 10 ml", "Material de vidre utilitzat per transferir volums exactes.  Té una capacitat de 10 ml"],
    [20, "image20", "Pipeta aforada 25 ml", "Material de vidre utilitzat per transferir volums exactes. Té una capacitat de 25 ml"],
    [21, "image21", "Pipeta graduada 5 ml", "Material de vidre utilitzat per transferir volums. Té una capacitat de 5 ml"],
    [22, "image22", "Pipeta graduada 10 ml", "Material de vidre utilitzat per transferir volums. Té una capacitat de 10 ml"],
    [23, "image23", "Pipeta graduada 25 ml", "Material de vidre utilitzat per transferir volums. Té una capacitat de 25 ml"],
    [24, "image24", "Tub d'assaig", "És un tub estret i llarg de vidre o plàstic usat per realitzar pràctiques de laboratori amb petits volums de fins a 20 ml aproximadament."],
    [25, "image25", "Termòmetre", "Tub de vidre el qual al reaccionar amb una temperatura el liquid interior puja o baixa. El liquid antigament era de mercuri."],
    [26, "image26", "Càpsula de porcellana 60 mL", "Recipient semicircular fet de porcellana per aguantar altes temperatures i utilitzat per residu sec i/o dessecar papers de filtre. Té una capacitat de 60 mL"],
    [27, "image27", "Càpsula de porcellana 140 mL", "Recipient semicircular fet de porcellana per aguantar altes temperatures i utilitzat per residu sec i/o dessecar papers de filtre. Té una capacitat de 1400 mL"],
    [28, "image28", "Vidre de rellotge 80 mm diàm.", "que s'utilitza per mesurar la massa o el pes de productes sòlids. Té un diàmetre de 80 mm"],
    [29, "image29", "Vidre de rellotge 100 mm diàm.", "que s'utilitza per mesurar la massa o el pes de productes sòlids. Té un diàmetre de 100 mm"]
];
let showButton = false
let respostes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]
let imageID = ""
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
              }
          }
        });
      
      AFRAME.registerComponent('markerhandler16', {
          init: function() {
            // Set up the tick throttling. Will check if marker is active every 500ms
            this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
          },
          tick: function(t, dt) {
            if (document.querySelector("#marca16").object3D.visible == true) {
              // MARKER IS PRESENT
               numeroimagen=16;
               console.log(numeroimagen);
            }
          }
        });
  
      
      AFRAME.registerComponent('markerhandler17', {
          init: function() {
            // Set up the tick throttling. Will check if marker is active every 500ms
            this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
          },
          tick: function(t, dt) {
            if (document.querySelector("#marca17").object3D.visible == true) {
              // MARKER IS PRESENT
               numeroimagen=17;
               console.log(numeroimagen);
            }
          }
        });
      
      
      AFRAME.registerComponent('markerhandler18', {
          init: function() {
            // Set up the tick throttling. Will check if marker is active every 500ms
            this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
          },
          tick: function(t, dt) {
            if (document.querySelector("#marca18").object3D.visible == true) {
              // MARKER IS PRESENT
               numeroimagen=18;
               console.log(numeroimagen);
            }
          }
        });

     
       AFRAME.registerComponent('markerhandler19', {
          init: function() {
            this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
          },
          tick: function(t, dt) {
            if (document.querySelector("#marca19").object3D.visible == true) {
              // MARKER IS PRESENT
               numeroimagen=19;
               console.log(numeroimagen);
              }
          }
        });
      
      AFRAME.registerComponent('markerhandler20', {
          init: function() {
            // Set up the tick throttling. Will check if marker is active every 500ms
            this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
          },
          tick: function(t, dt) {
            if (document.querySelector("#marca20").object3D.visible == true) {
              // MARKER IS PRESENT
               numeroimagen=20;
               console.log(numeroimagen);
            }
          }
        });
  
      
      AFRAME.registerComponent('markerhandler21', {
          init: function() {
            // Set up the tick throttling. Will check if marker is active every 500ms
            this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
          },
          tick: function(t, dt) {
            if (document.querySelector("#marca21").object3D.visible == true) {
              // MARKER IS PRESENT
               numeroimagen=21;
               console.log(numeroimagen);
            }
          }
        });
      
      
      AFRAME.registerComponent('markerhandler22', {
          init: function() {
            // Set up the tick throttling. Will check if marker is active every 500ms
            this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
          },
          tick: function(t, dt) {
            if (document.querySelector("#marca22").object3D.visible == true) {
              // MARKER IS PRESENT
               numeroimagen=22;
               console.log(numeroimagen);
            }
          }
        });

     
       AFRAME.registerComponent('markerhandler23', {
          init: function() {
            this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
          },
          tick: function(t, dt) {
            if (document.querySelector("#marca23").object3D.visible == true) {
              // MARKER IS PRESENT
               numeroimagen=23;
               console.log(numeroimagen);
              }
          }
        });
      
      AFRAME.registerComponent('markerhandler24', {
          init: function() {
            // Set up the tick throttling. Will check if marker is active every 500ms
            this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
          },
          tick: function(t, dt) {
            if (document.querySelector("#marca24").object3D.visible == true) {
              // MARKER IS PRESENT
               numeroimagen=24;
               console.log(numeroimagen);
            }
          }
        });
  
      
      AFRAME.registerComponent('markerhandler25', {
          init: function() {
            // Set up the tick throttling. Will check if marker is active every 500ms
            this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
          },
          tick: function(t, dt) {
            if (document.querySelector("#marca25").object3D.visible == true) {
              // MARKER IS PRESENT
               numeroimagen=25;
               console.log(numeroimagen);
            }
          }
        });
      
      
      AFRAME.registerComponent('markerhandler26', {
          init: function() {
            // Set up the tick throttling. Will check if marker is active every 500ms
            this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
          },
          tick: function(t, dt) {
            if (document.querySelector("#marca26").object3D.visible == true) {
              // MARKER IS PRESENT
               numeroimagen=26;
               console.log(numeroimagen);
            }
          }
        });

     
       AFRAME.registerComponent('markerhandler27', {
          init: function() {
            this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
          },
          tick: function(t, dt) {
            if (document.querySelector("#marca27").object3D.visible == true) {
              // MARKER IS PRESENT
               numeroimagen=27;
               console.log(numeroimagen);
              }
          }
        });
      
      AFRAME.registerComponent('markerhandler28', {
          init: function() {
            // Set up the tick throttling. Will check if marker is active every 500ms
            this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
          },
          tick: function(t, dt) {
            if (document.querySelector("#marca28").object3D.visible == true) {
              // MARKER IS PRESENT
               numeroimagen=28;
               console.log(numeroimagen);
            }
          }
        });

     
       AFRAME.registerComponent('markerhandler29', {
          init: function() {
            this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
          },
          tick: function(t, dt) {
            if (document.querySelector("#marca29").object3D.visible == true) {
              // MARKER IS PRESENT
               numeroimagen=29;
               console.log(numeroimagen);
              }
          }
        });
      

function comprovarResposta(nResposta){
  imageID = numeroimagen;
  if (preguntas[nResposta][0] == imageID){
       document.getElementById("pregunta").innerHTML = "Correcto " + numeroimagen;  
  }else{
      document.getElementById("pregunta").innerHTML = "Incorrecto " + numeroimagen+" "+preguntas[nResposta][0];  
  }
}


function tomarId(){

  imageID = numeroimagen
  document.getElementById("pregunta").innerHTML = imageID;
  
}

function ferPregunta(){
  numeroPregunta = Math.floor(Math.random() * 29);
  return numeroPregunta;
}


function start(){
  var x = document.getElementById("splash");
  x.style.display = "none";
  preguntas.forEach(e =>{e[2];})
  document.getElementById("pregunta").innerHTML = preguntas[ferPregunta()][2]
}
setTimeout(start, 10000)



