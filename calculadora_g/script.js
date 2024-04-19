// Función para calcular las raíces de la ecuación cuadrática
function calcularRaices(a, b, c) {
    const discriminante = b**2 - 4 * a * c;

    if (discriminante >= 0) {
        const raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        return { raiz1, raiz2 };
    } else {
        return { raiz1: "Compleja", raiz2: "Compleja" };
    }
}

const formulario = document.getElementById('formulario');
const resultados = document.getElementById('resultados');
const discriminante = document.getElementById('discriminante');
const raiz1 = document.getElementById('raiz1');
const raiz2 = document.getElementById('raiz2');


formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    const resultado = calcularRaices(a, b, c);

    discriminante.textContent = `Discriminante: ${resultado.discriminante}`;
    raiz1.textContent = `Raíz 1: ${resultado.raiz1}`;
    raiz2.textContent = `Raíz 2: ${resultado.raiz2}`;
});
