//Contenido: Código JavaScript para la página de interpolación
//Constantes
const metodoSelect = document.getElementById('metodo');
const metodoLabel = document.querySelector('label[for="metodo"]');
const inputsContainer = document.getElementById('inputs-container');
const calcularBtn = document.getElementById('calcular');
const resultadoInput = document.getElementById('resultado');
const tituloH1 = document.querySelector('h1');

//Eventos
metodoSelect.addEventListener('change', mostrarInputs);
calcularBtn.addEventListener('click', calcularInterpolacion);

//Funcion para mostrar los inputs segun el metodo seleccionado
function mostrarInputs() {
    const metodo = metodoSelect.value;
    inputsContainer.innerHTML = '';

    if (metodo === '') {
        metodoLabel.style.display = 'inline-block';
        tituloH1.textContent = 'Interpolación';
    } else {
        metodoLabel.style.display = 'none';
    }

    if (metodo === 'lagrange') {
        tituloH1.textContent = 'Interpolación de Lagrange';
        mostrarInputsLagrange();
    } else if (metodo === 'lineal') {
        tituloH1.textContent = 'Interpolación Lineal';
        mostrarInputsLineal();
    }
}

//Funcion para mostrar los inputs de lagrange
function mostrarInputsLagrange() {
    const grado = document.createElement('div');
    grado.innerHTML = `
        <label for="grado">Seleccione el grado de interpolación:</label>
        <select id="grado">
            <option value="">Seleccione...</option>
            <option value="1">Primer grado</option>
            <option value="2">Segundo grado</option>
            <option value="3">Tercer grado</option>
        </select>
    `;
    inputsContainer.appendChild(grado);

    const gradoSelect = document.getElementById('grado');
    gradoSelect.addEventListener('change', mostrarInputsGrado);
}

//Funcion para mostrar los inputs segun el grado seleccionado
function mostrarInputsGrado() {
    const grado = parseInt(document.getElementById('grado').value);
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

//Funcion para mostrar los inputs de interpolacion lineal
function mostrarInputsLineal() {
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
}

//Funcion para calcular la interpolacion
function calcularInterpolacion() {
    const metodo = metodoSelect.value;

    if (metodo === 'lagrange') {
        calcularLagrange();
    } else if (metodo === 'lineal') {
        calcularLineal();
    }
}

//Funcion para calcular la interpolacion de lagrange
function calcularLagrange() {
    const grado = parseInt(document.getElementById('grado').value);
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

    //Mostrar el resultado
    resultadoInput.value = resultado || '';
}

//Funcion para calcular la interpolacion lineal
function calcularLineal() {
    const x = parseFloat(document.getElementById('x').value);
    const x0 = parseFloat(document.getElementById('x0').value);
    const x1 = parseFloat(document.getElementById('x1').value);
    const fx0 = parseFloat(document.getElementById('fx0').value);
    const fx1 = parseFloat(document.getElementById('fx1').value);

    const resultado = ((x - x0) / (x1 - x0)) * (fx1 - fx0) + fx0;

    resultadoInput.value = resultado;
}