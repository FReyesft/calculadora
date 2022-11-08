const botonesOperadores = document.querySelectorAll(".operador");
const botonNumeros = document.querySelectorAll(".numero");
const botonBorrar = document.querySelector(".borrar");
const primerValor = document.querySelector(".primer-valor");
const segundoValor = document.querySelector(".segundo-valor");
const igual = document.querySelector(".igual");

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


igual.addEventListener("click", () => {
    let primerValorSinOperador = primerValor.textContent.split("");
    primerValorSinOperador.pop();
    let primerValorString = primerValorSinOperador.toString();
    primerValorString = primerValorString.replaceAll(",", "");
    let numero1 = parseInt(primerValorString);
    let numero2 = parseInt(segundoValor.textContent);
    if(primerValor.textContent.includes("/")){
        let resultado = numero1 / numero2;
        primerValor.textContent = resultado;
        segundoValor.textContent = ""
    }
    if(primerValor.textContent.includes("x")){
        let resultado = numero1 * numero2;
        primerValor.textContent = resultado;
        segundoValor.textContent = ""
    }
    if(primerValor.textContent.includes("-")){
        let resultado = numero1 - numero2;
        primerValor.textContent = resultado;
        segundoValor.textContent = ""
    }
    if(primerValor.textContent.includes("+")){
        let resultado = numero1 + numero2;
        primerValor.textContent = resultado;
        segundoValor.textContent = ""
    }
});