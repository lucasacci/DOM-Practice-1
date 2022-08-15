let btnComenzar = document.querySelector("#btnComenzar");
let numeroX = 0;
let seccionPadre = document.querySelector('.container');
console.log(seccionPadre)

let formulario = document.querySelector("#formJuego");
formulario.addEventListener("submit", adivinar);

btnComenzar.addEventListener("click", generarNumero);

function generarNumero() {
  let numAleatorio = Math.round(Math.random() * (0 - 10) + 10);
  numeroX = numAleatorio;
  console.log(numeroX);
}

function adivinar(e) {
  e.preventDefault();
  let x = document.querySelector("#numero").value;
  console.log(x);
  if (x == numeroX) {
    // alert('Adivinaste!');
    let alert = document.createElement("div");
    alert.innerHTML = `<div class="alert alert-success my-3" role="alert">
        Adivinaste!
      </div>`;
      seccionPadre.appendChild(alert);
  } else if (x > numeroX) {
    // alert("El numero es menor al que ingresaste");
    let alert = document.createElement("div");
    alert.innerHTML = `<div class="alert alert-danger my-3" role="alert">
    El numero es menor al que ingresaste
  </div>`;
  seccionPadre.appendChild(alert);

  } else if (x < numeroX) {
    // alert("El numero es mayor al que ingresaste");
    let alert = document.createElement("div");
    alert.innerHTML = `<div class="alert alert-danger my-3" role="alert">
    El numero es mayor al que ingresaste
  </div>`;
  seccionPadre.appendChild(alert);
  }
}
