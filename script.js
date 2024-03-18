// Función para actualizar los inputs según el método seleccionado
function updateInputs() {
    const method = document.getElementById('method').value;
    const inputsContainer = document.getElementById('inputs');
    inputsContainer.innerHTML = ''; // Limpiar inputs anteriores

    // Crear inputs según el método seleccionado
    switch (method) {
        case 'lineal':
            createInputs(['x', 'x0', 'x1', 'f(x0)', 'f(x1)']);
            break;
        case 'lagrange1':
            createInputs(['x', 'x0', 'x1', 'f(x0)', 'f(x1)']);
            break;
        case 'lagrange2':
            createInputs(['x', 'x0', 'x1', 'x2', 'f(x0)', 'f(x1)', 'f(x2)']);
            break;
        case 'lagrange3':
            createInputs(['x', 'x0', 'x1', 'x2', 'x3', 'f(x0)', 'f(x1)', 'f(x2)', 'f(x3)']);
            break;
    }
}

// Función para crear inputs
function createInputs(labels) {
    const inputsContainer = document.getElementById('inputs');

    labels.forEach(label => {
        const formGroup = document.createElement('div');
        formGroup.classList.add('form-group');

        const labelElement = document.createElement('label');
        labelElement.textContent = label;

        const input = document.createElement('input');
        input.type = 'number';
        input.placeholder = `Ingresa ${label}`;

        formGroup.appendChild(labelElement);
        formGroup.appendChild(input);
        inputsContainer.appendChild(formGroup);
    });
}

// Función para calcular la interpolación
function calculate() {
    const method = document.getElementById('method').value;
    const inputs = document.querySelectorAll('#inputs input');
    const values = Array.from(inputs).map(input => parseFloat(input.value));

    let result;
    switch (method) {
        case 'lineal':
            result = interpolacionLineal(...values);
            break;
        case 'lagrange1':
            result = interpolacionLagrange1(...values);
            break;
        case 'lagrange2':
            result = interpolacionLagrange2(...values);
            break;
        case 'lagrange3':
            result = interpolacionLagrange3(...values);
            break;
    }

    document.getElementById('result').textContent = `Resultado: ${result}`;
}

// Función para calcular la interpolación lineal
function interpolacionLineal(x, x0, x1, fx0, fx1) {
    return fx0 + ((fx1 - fx0) / (x1 - x0)) * (x - x0);
}

// Función para calcular la interpolación de Lagrange de primer orden
function interpolacionLagrange1(x, x0, x1, fx0, fx1) {
    const l0 = (x - x1) / (x0 - x1);
    const l1 = (x - x0) / (x1 - x0);
    return fx0 * l0 + fx1 * l1;
}

// Función para calcular la interpolación de Lagrange de segundo orden
function interpolacionLagrange2(x, x0, x1, x2, fx0, fx1, fx2) {
    const l0 = (x - x1) * (x - x2) / ((x0 - x1) * (x0 - x2));
    const l1 = (x - x0) * (x - x2) / ((x1 - x0) * (x1 - x2));
    const l2 = (x - x0) * (x - x1) / ((x2 - x0) * (x2 - x1));
    return fx0 * l0 + fx1 * l1 + fx2 * l2;
}

// Función para calcular la interpolación de Lagrange de tercer orden
function interpolacionLagrange3(x, x0, x1, x2, x3, fx0, fx1, fx2, fx3) {
    const l0 = (x - x1) * (x - x2) * (x - x3) / ((x0 - x1) * (x0 - x2) * (x0 - x3));
    const l1 = (x - x0) * (x - x2) * (x - x3) / ((x1 - x0) * (x1 - x2) * (x1 - x3));
    const l2 = (x - x0) * (x - x1) * (x - x3) / ((x2 - x0) * (x2 - x1) * (x2 - x3));
    const l3 = (x - x0) * (x - x1) * (x - x2) / ((x3 - x0) * (x3 - x1) * (x3 - x2));
    return fx0 * l0 + fx1 * l1 + fx2 * l2 + fx3 * l3;
}