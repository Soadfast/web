// script.js

// Crear fuegos artificiales
function createFirework(x, y) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = `${x}px`;
    firework.style.top = `${y}px`;
    document.getElementById('fireworks-container').appendChild(firework);

    setTimeout(() => {
        firework.remove(); // Eliminar el fuego artificial después de la animación
    }, 2000);
}

// Generar múltiples fuegos artificiales aleatoriamente
function startFireworks() {
    const container = document.getElementById('fireworks-container');
    const interval = setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createFirework(x, y);
    }, 300); // Cada 300 ms aparece un nuevo fuego artificial

    setTimeout(() => {
        clearInterval(interval);
        document.getElementById('message').style.display = 'block'; // Mostrar mensaje
    }, 5000); // Detener los fuegos artificiales después de 5 segundos
}

// Iniciar fuegos artificiales cuando se cargue la página
window.onload = startFireworks;
