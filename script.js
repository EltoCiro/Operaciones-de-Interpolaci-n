const gradoSelect = document.getElementById('grado');
const inputsContainer = document.getElementById('inputs-container');
const calcularBtn = document.getElementById('calcular');
const resultadoInput = document.getElementById('resultado');

gradoSelect.addEventListener('change', mostrarInputs);
calcularBtn.addEventListener('click', calcularLagrange);

function mostrarInputs() {
    const grado = parseInt(gradoSelect.value);
    inputsContainer.innerHTML = '';

    if (grado === 1) {
        inputsContainer.innerHTML = `
            <div>
                <label for="x">X:</label>
                <input type="number" id="x" required>
            </div>
            <div>
                <label for="x0">X0:</label>
                <input type="number" id="x0" required>
            </div>
            <div>
                <label for="x1">X1:</label>
                <input type="number" id="x1" required>
            </div>
            <div>
                <label for="fx0">f(X0):</label>
                <input type="number" id="fx0" required>
            </div>
            <div>
                <label for="fx1">f(X1):</label>
                <input type="number" id="fx1" required>
            </div>
        `;
    } else if (grado === 2) {
        inputsContainer.innerHTML = `
            <div>
                <label for="x">X:</label>
                <input type="number" id="x" required>
            </div>
            <div>
                <label for="x0">X0:</label>
                <input type="number" id="x0" required>
            </div>
            <div>
                <label for="x1">X1:</label>
                <input type="number" id="x1" required>
            </div>
            <div>
                <label for="x2">X2:</label>
                <input type="number" id="x2" required>
            </div>
            <div>
                <label for="fx0">f(X0):</label>
                <input type="number" id="fx0" required>
            </div>
            <div>
                <label for="fx1">f(X1):</label>
                <input type="number" id="fx1" required>
            </div>
            <div>
                <label for="fx2">f(X2):</label>
                <input type="number" id="fx2" required>
            </div>
        `;
    } else if (grado === 3) {
        inputsContainer.innerHTML = `
            <div>
                <label for="x">X:</label>
                <input type="number" id="x" required>
            </div>
            <div>
                <label for="x0">X0:</label>
                <input type="number" id="x0" required>
            </div>
            <div>
                <label for="x1">X1:</label>
                <input type="number" id="x1" required>
            </div>
            <div>
                <label for="x2">X2:</label>
                <input type="number" id="x2" required>
            </div>
            <div>
                <label for="x3">X3:</label>
                <input type="number" id="x3" required>
            </div>
            <div>
                <label for="fx0">f(X0):</label>
                <input type="number" id="fx0" required>
            </div>
            <div>
                <label for="fx1">f(X1):</label>
                <input type="number" id="fx1" required>
            </div>
            <div>
                <label for="fx2">f(X2):</label>
                <input type="number" id="fx2" required>
            </div>
            <div>
                <label for="fx3">f(X3):</label>
                <input type="number" id="fx3" required>
            </div>
        `;
    }
}

function calcularLagrange() {
    const grado = parseInt(gradoSelect.value);
    let resultado;

    if (grado === 1) {
        const x = parseFloat(document.getElementById('x').value);
        const x0 = parseFloat(document.getElementById('x0').value);
        const x1 = parseFloat(document.getElementById('x1').value);
        const fx0 = parseFloat(document.getElementById('fx0').value);
        const fx1 = parseFloat(document.getElementById('fx1').value);
        resultado = ((x - x1) / (x0 - x1)) * fx0 + ((x - x0) / (x1 - x0)) * fx1;
    } else if (grado === 2) {
        const x = parseFloat(document.getElementById('x').value);
        const x0 = parseFloat(document.getElementById('x0').value);
        const x1 = parseFloat(document.getElementById('x1').value);
        const x2 = parseFloat(document.getElementById('x2').value);
        const fx0 = parseFloat(document.getElementById('fx0').value);
        const fx1 = parseFloat(document.getElementById('fx1').value);
        const fx2 = parseFloat(document.getElementById('fx2').value);
        resultado = (((x - x1) * (x - x2)) / ((x0 - x1) * (x0 - x2))) * fx0
            + (((x - x0) * (x - x2)) / ((x1 - x0) * (x1 - x2))) * fx1
            + (((x - x0) * (x - x1)) / ((x2 - x0) * (x2 - x1))) * fx2;
    } else if (grado === 3) {
        const x = parseFloat(document.getElementById('x').value);
        const x0 = parseFloat(document.getElementById('x0').value);
        const x1 = parseFloat(document.getElementById('x1').value);
        const x2 = parseFloat(document.getElementById('x2').value);
        const x3 = parseFloat(document.getElementById('x3').value);
        const fx0 = parseFloat(document.getElementById('fx0').value);
        const fx1 = parseFloat(document.getElementById('fx1').value);
        const fx2 = parseFloat(document.getElementById('fx2').value);
        const fx3 = parseFloat(document.getElementById('fx3').value);
        resultado = (((x - x1) * (x - x2) * (x - x3)) / ((x0 - x1) * (x0 - x2) * (x0 - x3))) * fx0
            + (((x - x0) * (x - x2) * (x - x3)) / ((x1 - x0) * (x1 - x2) * (x1 - x3))) * fx1
            + (((x - x0) * (x - x1) * (x - x3)) / ((x2 - x0) * (x2 - x1) * (x2 - x3))) * fx2
            + (((x - x0) * (x - x1) * (x - x2)) / ((x3 - x0) * (x3 - x1) * (x3 - x2))) * fx3;
    }

    resultadoInput.value = resultado || '';
}