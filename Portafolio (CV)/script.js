document.addEventListener('DOMContentLoaded', () => {
    const revealSection = () => {
        const sections = document.querySelectorAll('section');
        const revealPoint = window.innerHeight / 1.2;
        const currentScroll = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top + currentScroll;
            if (currentScroll + revealPoint >= sectionTop) {
                section.classList.add('visible');
            }
        });
    };

    document.addEventListener('scroll', revealSection);
    revealSection();

    const navLinks = document.querySelectorAll('nav ul li a');
    const navbar = document.getElementById('navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    let lastScrollTop = 0;

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 20,
                behavior: 'smooth'
            });

            navLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        });
    });

    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + window.innerHeight / 2;
        const st = window.pageYOffset || document.documentElement.scrollTop;

        sections.forEach(section => {
            if (scrollPos > section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                const id = section.getAttribute('id');
                document.querySelector('.active').classList.remove('active');
                document.querySelector(`nav ul li a[href="#${id}"]`).classList.add('active');
            }
        });

        if (st > lastScrollTop) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }
        lastScrollTop = st <= 0 ? 0 : st;
    });

    menuToggle.addEventListener('click', () => {
        const navUl = document.querySelector('nav ul');
        navUl.classList.toggle('open');
    });
});
