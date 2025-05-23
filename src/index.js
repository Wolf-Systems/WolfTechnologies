// src/index.js
import './styles.css';


const cloud = document.getElementById("cloud");
const barraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");


menu.addEventListener("click", () => {
    barraLateral.classList.toggle("max-barra-lateral");
    if (barraLateral.classList.contains("max-barra-lateral")) {
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    }
    else {
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    }

    if (window.innerWidth <= 300) {
        barraLateral.classList.add("mini-barra-lateral");
        main.classList.add("min-main");
        spans.forEach((span) => {
            span.classList.add("oculto");
        })
    }

    localStorage.setItem("max-barra-lateral", barraLateral.classList.contains("max-barra-lateral"));
})

palanca.addEventListener("click", () => {
    let body = document.body;
    body.classList.toggle("dark-mode");
    circulo.classList.toggle("prendido");

    localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
})

cloud.addEventListener("click", () => {
    barraLateral.classList.toggle("mini-barra-lateral");
    main.classList.toggle("min-main");
    spans.forEach((span) => {
        span.classList.toggle('oculto');
    })

    localStorage.setItem("mini-barra-lateral", barraLateral.classList.contains("mini-barra-lateral"));
});

window.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // Restaurar modo oscuro
    if (localStorage.getItem("dark-mode") === "true") {
        body.classList.add("dark-mode");
        circulo.classList.add("prendido");
    }

    // Restaurar estado de barra lateral
    if (localStorage.getItem("mini-barra-lateral") === "true") {
        barraLateral.classList.add("mini-barra-lateral");
        main.classList.add("min-main");
        spans.forEach((span) => {
            span.classList.add("oculto");
        });
    }

    if (localStorage.getItem("max-barra-lateral") === "true") {
        barraLateral.classList.add("max-barra-lateral");
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    }
});


// // Función para mostrar la sección activa
// function showSection(section) {
//     // Ocultamos todas las secciones
//     const sections = document.querySelectorAll('.section');
//     sections.forEach(sec => sec.classList.remove('active'));

//     // Mostramos la sección seleccionada
//     const selectedSection = document.getElementById(section);
//     selectedSection.classList.add('active');

//     // Guardamos la sección activa en localStorage para persistencia
//     localStorage.setItem('activeSection', section);
// }


// Función para mostrar la sección activa
function showSection(section) {
    // Ocultamos todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('active'));

    // Mostramos la sección seleccionada
    const selectedSection = document.getElementById(section);
    selectedSection.classList.add('active');

    // Guardamos la sección activa en localStorage para persistencia
    localStorage.setItem('activeSection', section);
}

// ✅ Esto la hace accesible desde el HTML
window.showSection = showSection;


// Al cargar la página, verificar si hay una sección activa en el localStorage
window.onload = function () {

    const activeSection = localStorage.getItem('activeSection') || 'home-section';
    showSection(activeSection);

    // Aplicar la clase 'active' al enlace correspondiente
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        if (link.getAttribute("href") === `#${activeSection}`) {
            link.classList.add("active");
        }
    });


};

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function () {
            // Solo afecta a los enlaces relacionados con las secciones
            if (link.getAttribute("href").startsWith("#")) {
                links.forEach(l => l.classList.remove("active")); // Remueve la clase de todos los enlaces
                this.classList.add("active"); // Agrega la clase al enlace clickeado
            }
        });
    });

    const tabsContainer = document.querySelector(".tabs"); // Selecciona solo el contenedor de tabs
    if (!tabsContainer) return; // Si no existe, termina la ejecución

    const tabs = tabsContainer.querySelectorAll("a"); // Solo las etiquetas <a> dentro de .tabs
    const articles = document.querySelectorAll("article");

    // Recuperar el índice de la pestaña activa desde localStorage
    const activeTabIndex = localStorage.getItem("activeTabIndex");

    // Si hay un índice activo guardado, seleccionamos esa pestaña
    if (activeTabIndex !== null) {
        tabs[activeTabIndex].classList.add("active");
        articles.forEach((article, index) => {
            article.style.display = index === parseInt(activeTabIndex) ? "block" : "none";
        });
    } else {
        // Si no hay índice guardado, seleccionamos la primera pestaña por defecto
        tabs[0].classList.add("active");
        articles.forEach((article, index) => {
            article.style.display = index === 0 ? "block" : "none";
        });
    }

    // Agregar evento de clic a cada pestaña
    tabs.forEach((tab, index) => {
        tab.addEventListener("click", function (event) {
            event.preventDefault(); // Evita la recarga de la página

            // Remover la clase 'active' solo de los enlaces dentro de .tabs
            tabs.forEach(t => t.classList.remove("active"));

            // Agregar 'active' a la pestaña actual
            tab.classList.add("active");

            // Ocultar todos los artículos
            articles.forEach(article => article.style.display = "none");

            // Mostrar el artículo correspondiente al índice de la pestaña
            articles[index].style.display = "block";

            // Guardar el índice de la pestaña activa en localStorage
            localStorage.setItem("activeTabIndex", index);
        });
    });
});