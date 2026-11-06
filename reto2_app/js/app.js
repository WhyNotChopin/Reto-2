document.getElementById('formulario-imc').addEventListener('submit', function(e) {
    e.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const alturaCm = parseFloat(document.getElementById('altura').value);
    const alturaM = alturaCm / 100;

    if (isNaN(peso) || isNaN(alturaM) || peso <= 0 || alturaM <= 0) {
        alert('Por favor ingresa valores válidos.');
        return;
    }

    const imc = peso / (alturaM * alturaM);
    const imcRedondeado = imc.toFixed(1);

    let categoria = '';
    let recomendacion = '';
    let colorClase = '';

    if (imc < 18.5) {
        categoria = 'Bajo peso';
        recomendacion = 'Es recomendable consultar a un nutricionista para asegurar una alimentación equilibrada.';
    } else if (imc < 25) {
        categoria = 'Peso normal';
        recomendacion = '¡Buen trabajo! Mantén hábitos saludables de alimentación y actividad física.';
    } else if (imc < 30) {
        categoria = 'Sobrepeso';
        recomendacion = 'Considera aumentar la actividad física y revisar tu alimentación con un profesional.';
    } else {
        categoria = 'Obesidad';
        recomendacion = 'Es importante buscar orientación médica y nutricional para mejorar tu salud.';
    }

    document.getElementById('valor').textContent = imcRedondeado;
    document.getElementById('categoria').textContent = categoria;
    document.getElementById('recomendacion').textContent = recomendacion;

    const resultado = document.getElementById('resultado');
    resultado.classList.remove('oculto');
});
