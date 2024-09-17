document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = 'АЯШЕРТЫУИОПЮЬЪСДФГЧЙКЛЩЗХЦВБНМ@#$%^&*()*&^%<>{}[]°¨`';
    const fontSize = 12;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.09)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0F0';
        ctx.font = `${fontSize}px monospace`;

        drops.forEach((y, i) => {
            const text = matrix[Math.floor(Math.random() * matrix.length)];
            const x = i * fontSize;
            ctx.fillText(text, x, y * fontSize);

            if (y * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        });
    }

    setInterval(draw, 24);

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        } else {
            navbar.style.backgroundColor = 'transparent';
        }
    });

    // Funcionalidad para el menú hamburguesa en móviles
    const menuToogle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToogle.addEventListener('change', () => {
        if (menuToggle.checked) {
            navLinks.style.display = 'flex' ;
        } else {
            navLinks.style.display = 'none' ;
        }
    });

    // Footer
    const footerLeft = document.querySelector('.footer-left');
    const footerRight = document.querySelector('.footer-right');

    if (footerLeft && footerRight) {
        footerLeft.style.float = 'left';
        footerRight.style.float = 'right';
        footerLeft.style.padding = '10px';
        footerRight.style.padding = '10px';
    }

    const footer = document.querySelector('.footer');
    observer.observe(footer);
});
