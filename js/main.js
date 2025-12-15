
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');
const toggle = document.querySelector('.theme-toggle');

// Vérifier que les éléments existent
if (burger && navLinks) {
  // Toggle du menu mobile
  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
  });

  // Fermer le menu quand on clique ailleurs
  document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
    }
  });

  // Fermer le menu quand on clique sur un lien
  navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// Marquer le lien actif basé sur la page actuelle
function setActiveLink() {
  const currentPage = window.location.pathname;
  
  navLinksItems.forEach(link => {
    link.classList.remove('active');
    
    const href = link.getAttribute('href');
    
    // Vérifier si c'est la page actuelle
    if (currentPage.includes(href) || 
        (currentPage.endsWith('/') && href === 'index.html') ||
        (currentPage.endsWith('index.html') && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Appeler la fonction au chargement
window.addEventListener('DOMContentLoaded', () => {
  setActiveLink();
  
  // Charger le thème sauvegardé
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }
});

// Gérer le thème sombre
if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });
}


