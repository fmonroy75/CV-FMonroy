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