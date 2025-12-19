AOS.init({ duration: 1000, once: true });

    // Mostrar botón "Volver arriba"
    const btnTop = document.getElementById("btnTop");
    window.onscroll = () => btnTop.style.display = (window.scrollY > 300) ? "flex" : "none";
    function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

    // Modo oscuro
    const toggle = document.getElementById("darkModeToggle");
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      toggle.innerHTML = document.body.classList.contains("dark-mode")
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
    });
/*
        // Cargar el sill
        fetch('../../skill.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('skills-container').innerHTML = data;
            })
            .catch(error => console.error('Error cargando el footer:', error));
            */

            // Crear un archivo pathHelper.js
function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/es/') || path.includes('/fr/')) {
        return '../';
    }
    return './';
}

// En tu archivo que carga las skills
function loadSkills() {
    const basePath = getBasePath();
    const skills = [

        'assets/img/skills/html5-logo.png',
        'assets/img/skills/CSS3_Logo.png',
        'assets/img/skills/JavaScript-logo.png',
        'assets/img/skills/jquery-logo.webp',
        'assets/img/skills/bootstrap-logo.png',
        'assets/img/skills/murex-logo.webp',
        'assets/img/skills/peoplesoft-logo.png',
        'assets/img/skills/php-logo.webp',
        'assets/img/skills/python-logo.webp',
        'assets/img/skills/sql-database-logo.jpg',
        'assets/img/skills/GitHub-Logo.png',
        'assets/img/skills/django-logo.webp',  
        'assets/img/skills/wordpress.webp',
        'assets/img/skills/wix.png',
        'assets/img/skills/logo-postgresql.png', 
        'assets/img/skills/moodle.jpeg',                         
        // ... todas las imágenes
    ];
    
    const container = document.getElementById('skills-container');
    if (container) {
        let html = '';
        skills.forEach(src => {
            const fullPath = basePath + src;
            const name = src.split('/').pop().replace(/-logo|_Logo|.png|.webp|.jpg/gi, '');
            html += `<img src="${fullPath}" alt="${name}" title="${name}" class="tech-logo">`;
        });
        container.innerHTML = html;
    }
}

// Llamar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadSkills);

//animaciones suaves en scroll
// En script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if(targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if(targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });