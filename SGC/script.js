document.addEventListener('DOMContentLoaded', () => {
    const matrix = document.createElement('div');
    matrix.className = 'matrix';
    document.body.appendChild(matrix);

    const letters = "⍑ʖᔑᓵ↸⎓ᒷリ!¡ᑑ∷ᓭᑲᑊ";
    const maxCharacters = 1500;  // Número máximo de caracteres en la pantalla
    let characters = [];

    const createMatrixEffect = () => {
        const span = document.createElement('span');
        span.textContent = letters[Math.floor(Math.random() * letters.length)];
        span.style.left = `${Math.random() * 100}vw`;
        span.style.top = `${Math.random() * 100}vh`;
        span.style.animationDelay = `${Math.random() * 3}s`;
        span.style.opacity = Math.random();
        matrix.appendChild(span);

        characters.push(span);

        // Agregar la clase `fade-out` después de un tiempo
        setTimeout(() => {
            span.classList.add('fade-out');
        }, 1500);  // Comienza la transición de desaparición después de 1.5 segundos

        // Eliminar el span del DOM después de que se desvanezca
        setTimeout(() => {
            if (span.parentElement === matrix) {  // Verificar si el span aún está en el DOM
                matrix.removeChild(span);
                characters = characters.filter(char => char !== span);
            }
        }, 3000);  // Eliminar el span después de que la transición de desaparición termine
    };

    const maintainMatrixEffect = () => {
        if (characters.length < maxCharacters) {
            createMatrixEffect();
        }
    };

    setInterval(maintainMatrixEffect, 50);  // Verificar cada 100ms para mantener el número de caracteres
});
