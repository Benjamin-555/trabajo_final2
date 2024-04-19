// Tasas de cambio (ejemplo)
const tasasDeCambio = {
    DOP: {
        USD: 0.018,
        EUR: 0.016,
        JPY: 1.92
    },
    USD: {
        DOP: 55.56,
        EUR: 0.88,
        JPY: 106.32
    },
    EUR: {
        DOP: 62.50,
        USD: 1.14,
        JPY: 121.74
    },
    JPY: {
        DOP: 0.52,
        USD: 0.0094,
        EUR: 0.0082
    }
};

function convertirMoneda() {
    const monedaOrigen = document.getElementById('monedaOrigen').value;
    const monedaDestino = document.getElementById('monedaDestino').value;
    const cantidad = parseFloat(document.getElementById('cantidad').value);

    if (monedaOrigen === monedaDestino) {
        alert("La moneda de origen y destino no pueden ser la misma.");
        return;
    }

    const tasaCambio = tasasDeCambio[monedaOrigen][monedaDestino];
    const montoConvertido = cantidad * tasaCambio;

    document.getElementById('montoConvertido').textContent = `${cantidad} ${monedaOrigen} equivale a ${montoConvertido.toFixed(2)} ${monedaDestino}`;
}
