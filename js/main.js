// JS minimal pour la navigation active
window.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const current = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});
