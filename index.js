const botonesOperadores = document.querySelectorAll(".operador");
const botonNumeros = document.querySelectorAll(".numero");
const botonBorrar = document.querySelector(".borrar");
const primerValor = document.querySelector(".primer-valor");
const segundoValor = document.querySelector(".segundo-valor");

botonesOperadores.forEach((boton) => {
    boton.addEventListener("click", () => {
        if(primerValor.textContent.includes('/')){
            segundoValor.textContent = segundoValor.textContent + boton.value;
        } else if(primerValor.textContent.includes('x')){
            segundoValor.textContent = segundoValor.textContent + boton.value;
        } else if(primerValor.textContent.includes('-')){
            segundoValor.textContent = segundoValor.textContent + boton.value;
        } else if(primerValor.textContent.includes('+')){
            segundoValor.textContent = segundoValor.textContent + boton.value;
        }
         else {
            primerValor.textContent = primerValor.textContent + boton.value;
        }
    });
})

botonBorrar.addEventListener("click", () => {
    let contenido = primerValor.textContent;
    let contenido2 = segundoValor.textContent;
    if (contenido.length > 0) {
        primerValor.textContent = "";
    }
    if (contenido2.length > 0) {
        segundoValor.textContent = "";
    }
});


botonNumeros.forEach((numero) => {
    numero.addEventListener("click", () => {
        if(primerValor.textContent.includes('/')){
            segundoValor.textContent = segundoValor.textContent + numero.value;
        } else if(primerValor.textContent.includes('x')){
            segundoValor.textContent = segundoValor.textContent + numero.value;
        } else if(primerValor.textContent.includes('-')){
            segundoValor.textContent = segundoValor.textContent + numero.value;
        } else if(primerValor.textContent.includes('+')){
            segundoValor.textContent = segundoValor.textContent + numero.value;
        }
         else {
            primerValor.textContent = primerValor.textContent + numero.value;
        }
    });
})
