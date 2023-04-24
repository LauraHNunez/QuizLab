let preguntas = ["Matràs aforat 100ml","Matràs aforat 100ml","Matràs aforat 250ml"
,"Matràs aforat 500ml"
,"Micropipeta 20-200 ul"
,"Micropipeta 100-1000 ul"
,"Micropipeta 1-5ml"
,"Bureta 25 mL"
,"Proveta 100 mL"
,"Vas de precipitats 50 mL"
,"Vas de precipitats 100 mL"
,"Vas de precipitats de 250 mL"
,"Matràs Erlenmeyer vidre 100 ml"
,"Matràs Erlenmeyer vidre 250 ml"
,"Matràs Kitasato vidre 250mL"
,"Embut de 75mm"
,"Embut de 100mm"
,"Morter de porcellana "
,"Morter de vidre "
,"Pipeta aforada 5 ml"
,"Pipeta aforada 10ml"
,"Pipeta aforada 25ml"
,"Pipeta graduada 5ml"
,"Pipeta graduada 10 ml"
,"Pipeta graduada 25 ml"
,"Tub d'assaig" 
,"Termòmetre"
,"Càpsula de porcellana 60 mL"
,"Càpsula de porcellana 140 mL"
,"Vidre de rellotge 80mm diàm."
,"Vidre de rellotge 100mm diàm."
,"Suport peu"
,"Suport tres peus viscosímetre copa Ford"
,"Suport per con de sedimentació Imhoff (2 cons)"
,"Suport tres peus" 
,"Reixeta"
,"Pinça suport pales llises"
,"Embut de decantació 250ml"
,"Embut de decantació 500ml"
,"Tamisos de llautó (columna amb 6 malles 2-0,063"
,"Frascó autoclavable 250ml"
,"Bec bunsen "
,"Vareta de vidre 250x8mm"
,"Safata"
,"Flascó rentador"
,"Placa de petri"
,"Nança de Kolle"
,"Nança de digralsky"]

let respostes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47]


function comprovarResposta(nResposta){
  if (respostes[nResposta] == nResposta){
      
  }
}




function ferPregunta(){
  const result = Math.floor(Math.random() * 46);
  return result;
}


function start(){
  var x = document.getElementById("splash");
  x.style.display = "none";
  document.getElementById("pregunta").innerHTML = preguntas[ferPregunta()];
}
setTimeout(start, 6000);