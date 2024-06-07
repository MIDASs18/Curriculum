let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come back...";
    //document.getElementById(id-favicon).hre
})
window.addEventListener("focus", () =>{
    document.title = docTitle;
})

document.addEventListener('DOMContentLoaded', function () {
    const copyIcons = document.querySelectorAll('.copy-icon');
    const copyIconsIn = document.querySelectorAll('.copy-icon-in');

    copyIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            const content = this.parentElement.textContent.replace('content_copy', '').trim(); // Excluir "content_copy" del contenido
            navigator.clipboard.writeText(content); // Copiar el contenido al portapapeles
            // Mostrar una notificación o hacer algo más después de copiar si es necesario
        });

        icon.addEventListener('mouseenter', function () {
            const content = this.parentElement.textContent.replace('content_copy', '').trim(); // Excluir "content_copy" del contenido
            this.setAttribute('title', content); // Establecer el contenido como título (aparecerá en la pestaña)
        });
    });
    copyIconsIn.forEach(icon => {
        icon.addEventListener('click', function () {
            const content = this.parentElement.querySelector('a').getAttribute('href'); // Obtener la URL del enlace
            navigator.clipboard.writeText(content); // Copiar el contenido al portapapeles
            // Mostrar una notificación o hacer algo más después de copiar si es necesario
        });

        icon.addEventListener('mouseenter', function () {
            const content = this.parentElement.querySelector('a').getAttribute('href'); // Obtener la URL del enlace
            this.setAttribute('title', content); // Establecer la URL como título (aparecerá en la pestaña)
        });
    });
});

function toggleMenu() {
    var menuToggle = document.querySelector('.menu-toggle');
    var menuLinks = document.getElementById('menuLinks');
    menuToggle.classList.toggle('active');
    menuLinks.classList.toggle('active');
    var menuLinks = document.getElementById("menuLinks");
    menuLinks.style.display === "block" ? menuLinks.style.display = "none" : menuLinks.style.display = "block";
}

document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Muestra u oculta el botón flotante al hacer scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) { // Cambia 100 por la cantidad de scroll que prefieras
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Desplaza la página al principio al hacer clic en el botón
    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');

            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var info = document.getElementById('div-LaSalle-info');
    info.forEach(icon => {
        icon.addEventListener('mouseenter', function () {
            info.classList.toggle('active');
        });
    });
});

function toggleDetails(element) {
    const details = element.nextElementSibling;
    const allDetails = document.querySelectorAll('.details');

    if (allDetails) {
        allDetails.forEach(detail => {
            if (detail !== details) {
                detail.classList.remove('show');
            }
        });

        details.classList.toggle('show');
    }
}
