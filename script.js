// Función para calcular la Interpolación Lineal
function calculateLinearInterpolation() {
    const x = parseFloat(document.getElementById('x-linear').value);
    const x0 = parseFloat(document.getElementById('x0-linear').value);
    const x1 = parseFloat(document.getElementById('x1-linear').value);
    const fx0 = parseFloat(document.getElementById('fx0-linear').value);
    const fx1 = parseFloat(document.getElementById('fx1-linear').value);

    // Validación de datos
    if (isNaN(x) || isNaN(x0) || isNaN(x1) || isNaN(fx0) || isNaN(fx1)) {
        document.getElementById('linear-result').textContent = 'Por favor, ingrese valores numéricos válidos.';
        return;
    }

    const result = fx0 + ((x - x0) * (fx1 - fx0)) / (x1 - x0);
    document.getElementById('linear-result').textContent = `El resultado de la Interpolación Lineal es: ${result.toFixed(6)}`;
}

// Función para calcular la Interpolación de Lagrange de segundo orden
function calculateLagrangeInterpolation() {
    const x = parseFloat(document.getElementById('x-lagrange').value);
    const x0 = parseFloat(document.getElementById('x0-lagrange').value);
    const x1 = parseFloat(document.getElementById('x1-lagrange').value);
    const x2 = parseFloat(document.getElementById('x2-lagrange').value);
    const fx0 = parseFloat(document.getElementById('fx0-lagrange').value);
    const fx1 = parseFloat(document.getElementById('fx1-lagrange').value);
    const fx2 = parseFloat(document.getElementById('fx2-lagrange').value);

    // Validación de datos
    if (isNaN(x) || isNaN(x0) || isNaN(x1) || isNaN(x2) || isNaN(fx0) || isNaN(fx1) || isNaN(fx2)) {
        document.getElementById('lagrange-result').textContent = 'Por favor, ingrese valores numéricos válidos.';
        return;
    }

    const term1 = (fx0 * (x - x1) * (x - x2)) / ((x0 - x1) * (x0 - x2));
    const term2 = (fx1 * (x - x0) * (x - x2)) / ((x1 - x0) * (x1 - x2));
    const term3 = (fx2 * (x - x0) * (x - x1)) / ((x2 - x0) * (x2 - x1));
    const result = term1 + term2 + term3;

    document.getElementById('lagrange-result').textContent = `El resultado de la Interpolación de Lagrange de 2do orden es: ${result.toFixed(6)}`;
}