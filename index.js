const botonesOperadores = document.querySelectorAll(".operador");
const botonNumeros = document.querySelectorAll(".numero");
botonesOperadores.forEach((boton) => {
    boton.addEventListener("click", () => {
        alert(boton.value)    
    })
})

botonNumeros.forEach((numero) => {
    numero.addEventListener("click", () => {
        alert(numero.value)
    })
})