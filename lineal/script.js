//Contenido: Código JavaScript para la página de interpolación lineal

// Constantes
const inputsContainer = document.getElementById('inputs-container');
const calcularBtn = document.getElementById('calcular');
const resultadoInput = document.getElementById('resultado');

// Evento para calcular la interpolación lineal
calcularBtn.addEventListener('click', calcularLineal);

// Función para calcular la interpolación lineal
function calcularLineal() {
    const x = parseFloat(document.getElementById('x').value);
    const x0 = parseFloat(document.getElementById('x0').value);
    const x1 = parseFloat(document.getElementById('x1').value);
    const fx0 = parseFloat(document.getElementById('fx0').value);
    const fx1 = parseFloat(document.getElementById('fx1').value);

    const resultado = ((x - x0) / (x1 - x0)) * (fx1 - fx0) + fx0;

    resultadoInput.value = resultado;
}
