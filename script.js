// script.js

document.addEventListener("DOMContentLoaded", function () {
    const title = document.getElementById("title");
    const text = "Bienvenido a Aztharot - Servicios de Ciberseguridad";
    title.textContent = "";

    let index = 0;
    function typeWriter() {
        if (index < text.length) {
            title.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        } else {
            title.classList.add("text-blink");
        }
    }
    typeWriter();
});
