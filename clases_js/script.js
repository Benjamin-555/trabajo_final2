class TextTransformer {
    constructor(text) {
        this.text = text;
    }

    // Retorna la cantidad de caracteres del texto
    countCharacters() {
        return this.text.length;
    }

    // Convierte el texto a mayúsculas
    toUpperCase() {
        return this.text.toUpperCase();
    }

    // Convierte el texto a minúsculas
    toLowerCase() {
        return this.text.toLowerCase();
    }

    // Verifica si el texto es un palíndromo
    isPalindrome() {
        const cleanedText = this.text.replace(/[\W_]/g, '').toLowerCase(); // Remueve caracteres no alfanuméricos y convierte a minúsculas
        const reversedText = cleanedText.split('').reverse().join('');
        return cleanedText === reversedText;
    }
}

// Uso de la clase
const myText = new TextTransformer("Anita lava la tina");

console.log("Cantidad de caracteres:", myText.countCharacters());
console.log("En mayúsculas:", myText.toUpperCase());
console.log("En minúsculas:", myText.toLowerCase());
console.log("¿Es palíndromo?", myText.isPalindrome() ? "Sí" : "No");
