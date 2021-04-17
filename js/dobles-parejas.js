let img = new Array(12);
img[0] = "imagen1.jpg";
img[1] = "imagen2.jpg";
img[2] = "imagen3.jpg";
img[3] = "imagen4.jpg";
img[4] = "imagen5.jpg";
img[5] = "imagen6.jpg";
img[6] = "imagen1.jpg";
img[7] = "imagen2.jpg";
img[8] = "imagen3.jpg";
img[9] = "imagen4.jpg";
img[10] = "imagen5.jpg";
img[11] = "imagen6.jpg";
let pos = new Array(12);
pos[0] = 1;
pos[1] = 2;
pos[2] = 3;
pos[3] = 4;
pos[4] = 5;
pos[5] = 6;
pos[6] = 7;
pos[7] = 8;
pos[8] = 9;
pos[9] = 10;
pos[10] = 11;
pos[11] = 12;
let pareja = new Array();
let azar = new Array();
let aleatorio;
let indice;
let posicion;
let contador = 0;
let repetida = 0;
let control = 0;
let iguales = new Array(12);
iguales[0] = "../img/reverso.jpg";
iguales[1] = "../img/reverso.jpg";
iguales[2] = "../img/reverso.jpg";
iguales[3] = "../img/reverso.jpg";
iguales[4] = "../img/reverso.jpg";
iguales[5] = "../img/reverso.jpg";
iguales[6] = "../img/reverso.jpg";
iguales[7] = "../img/reverso.jpg";
iguales[8] = "../img/reverso.jpg";
iguales[9] = "../img/reverso.jpg";
iguales[10] = "../img/reverso.jpg";
iguales[11] = "../img/reverso.jpg";
let contaIgual = 0;
let anterior;
let movimiento = "impar";
let intentos = 0;
function aleatoria() {
  aleatorio = Math.floor(Math.random() * 12);
  if (contador == 0) {
    azar[0] = aleatorio;
    indice = azar[contador];
    posicion = pos[contador];
    contador = 1;
    pareja[contador] = "../img-juego/" + img[indice];
    aleatoria();
  }
  comprobar();
}
function comprobar() {
  for (let i = 0; i < contador; i++) {
    if (azar[i] == aleatorio) {
      repetida = 1;
    }
  }
  matriz();
}
function matriz() {
  if (contador < 12) {
    if (repetida == 1) {
      repetida = 0;
      aleatoria();
    } else {
      azar[contador] = aleatorio;
      indice = azar[contador];
      posicion = pos[contador];
      contador = contador + 1;
      pareja[contador] = "../img-juego/" + img[indice];
      aleatoria();
    }
  }
  control = 1;
}
function voltear(l) {
  if (control == 1) {
    if (movimiento == "impar") {
      anterior = l;
      movimiento = "par";
    }
    if (movimiento == "par" && anterior != l) {
      intentos = intentos + 1;
      document.getElementById("jugadas").innerHTML = "Jugadas: " + intentos;
      if (pareja[anterior] == pareja[l]) {
        iguales[anterior - 1] = pareja[anterior];
        iguales[l - 1] = pareja[l];
        movimiento = "impar";
        if (document.images[l].src != "../img/reverso.jpg") {
          contaIgual = contaIgual + 1;
        }
        document.images[anterior].src = pareja[anterior];
      } else {
        movimiento = "impar";
      }
    }
    document.images[l].src = pareja[l];
  }
}
function reverso() {
  if (control == 1 && movimiento == "impar") {
    for (let j = 0; j < 12; j++) {
      document.images[pos[j]].src = iguales[j];
    }
  }
  if (contaIgual == 6) {
    finPartida();
  }
}
function finPartida() {
  control = 0;
  document.images[0].src = "../img/final.jpg";
}

$(document).ready(function () {
  $(".btn-primary").click(function () {
    url = "dobles-parejas.html";
    $(location).attr("href", url);
  });
});
