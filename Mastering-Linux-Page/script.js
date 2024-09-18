document.addEventListener('DOMContentLoaded', function () {
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('nav a');
    var header = document.querySelector('header');
    var footer = document.querySelector('footer');
    var lastScrollTop = 0;

    function toggleNavMenu() {
        var nav = document.getElementById('mainNav');
        if (nav.style.display === 'block') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'block';
        }
    }

    function showSection(sectionId) {
        sections.forEach(function (section) {
            section.style.display = (section.id === sectionId) ? 'block' : 'none';
        });
    }

    function handleNavClick(event) {
        event.preventDefault();
        var sectionId = event.target.getAttribute('href').substring(1);
        showSection(sectionId);
        toggleNavMenu(); 
    }

    function handleScroll() {
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;
        var windowHeight = window.innerHeight;
        var bodyHeight = document.body.clientHeight;

        if (scrollPosition > lastScrollTop && scrollPosition + windowHeight >= bodyHeight) {
            header.style.top = '-80px';
            footer.style.opacity = 1;
        } else {
            header.style.top = '0';
            footer.style.opacity = 0;
        }

        lastScrollTop = scrollPosition;
    }

    window.addEventListener('scroll', handleScroll);

    navLinks.forEach(function (link) {
        link.addEventListener('click', handleNavClick);
    });
});
