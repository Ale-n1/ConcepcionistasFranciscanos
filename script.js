document.addEventListener("DOMContentLoaded", function() {
    console.log("Script cargado correctamente");

    // Manejo del botón "Leer más"
    const readMoreButtons = document.querySelectorAll(".read-more");
    console.log("Cantidad de botones 'Leer más':", readMoreButtons.length);

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function() {
            const moreContent = this.previousElementSibling;
            if (moreContent.style.display === "none" || !moreContent.style.display) {
                moreContent.style.display = "block";
                this.innerHTML = '<i class="fas fa-chevron-up"></i>';
            } else {
                moreContent.style.display = "none";
                this.innerHTML = '<i class="fas fa-book-open"></i>';
            }
        });
    });

    // Contador de visitas
    const visitCountElement = document.getElementById("visit-count");
    if (visitCountElement) {
        let visitCount = parseInt(localStorage.getItem("visitCount")) || 0;
        visitCount++;
        localStorage.setItem("visitCount", visitCount);
        visitCountElement.textContent = visitCount;
    } else {
        console.warn("Elemento 'visit-count' no encontrado");
    }

    // Modo oscuro
    const toggleThemeButton = document.getElementById("toggle-theme");
    const body = document.body;
    const savedTheme = localStorage.getItem("theme");

    function applyAutomaticDarkMode() {
        const currentHour = new Date().getHours();
        if (currentHour >= 19 || currentHour < 7) {
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
        }
    }

    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
    } else if (savedTheme === "light") {
        body.classList.remove("dark-mode");
    } else {
        applyAutomaticDarkMode();
    }

    toggleThemeButton.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    // Aceptación de cookies
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptCookiesButton = document.getElementById("accept-cookies");

    if (!localStorage.getItem("cookiesAccepted")) {
        cookieBanner.style.display = "flex";
    }

    if (acceptCookiesButton) {
        acceptCookiesButton.addEventListener("click", function() {
            localStorage.setItem("cookiesAccepted", "true");
            cookieBanner.style.display = "none";
        });
    } else {
        console.warn("Botón 'accept-cookies' no encontrado");
    }
});

// Manejar formulario de contacto
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Formulario enviado. Nos pondremos en contacto contigo pronto.");
    });
} else {
    console.warn("Formulario de contacto no encontrado");
}

// Manejar formulario de registro
const registroForm = document.getElementById("registro-form");
if (registroForm) {
    registroForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Formulario de registro enviado. ¡Gracias por unirte a nuestra comunidad!");
    });
} else {
    console.warn("Formulario de registro no encontrado");
}
z