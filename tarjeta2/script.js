const contenedorNumeros = document.getElementById('contenedorNumeros');
const resultadoValidacion = document.getElementById('resultadoValidacion');
const btnGenerar = document.getElementById('btnGenerar');
const btnValidar = document.getElementById('btnValidar');

let numerosAleatorios = [];

function generarNumerosAleatorios() {
    numerosAleatorios = [];

    while (numerosAleatorios.length < 40) {
        const numero = Math.floor(Math.random() * 10000).toString().padStart(4, '0');

        if (!numerosAleatorios.includes(numero)) {
            numerosAleatorios.push(numero);
        }
    }

    mostrarNumeros();
    btnValidar.disabled = false;
    btnGenerar.disabled = true;
}

function mostrarNumeros() {
    contenedorNumeros.innerHTML = '';

    numerosAleatorios.forEach(numero => {
        const elementoNumero = document.createElement('span');
        elementoNumero.textContent = numero + ' ';
        contenedorNumeros.appendChild(elementoNumero);
    });
}

function validarNumero() {
    const numeroIngresado = prompt('Ingrese un número de 4 dígitos:');

    if (!numeroIngresado || numeroIngresado.length !== 4 || isNaN(numeroIngresado)) {
        resultadoValidacion.textContent = 'Número inválido.';
        return;
    }

    if (numerosAleatorios.includes(numeroIngresado)) {
        resultadoValidacion.textContent = `El número ${numeroIngresado} es válido.`;
    } else {
        resultadoValidacion.textContent = `El número ${numeroIngresado} no es válido.`;
    }
}

btnGenerar.addEventListener('click', generarNumerosAleatorios);
btnValidar.addEventListener('click', validarNumero);
