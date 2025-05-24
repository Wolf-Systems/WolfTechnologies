const cloud = document.getElementById("cloud");
const barraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");
const modal = document.getElementById("modal-servicios");
const abrir = document.getElementById("abrir-modal");
const cerrar = document.getElementById("cerrar-modal");

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

// Función para abrir
function abrirModal() {
    modal.classList.add("mostrar");
    document.body.classList.add("bloquear-scroll");
    localStorage.setItem("modalAbierto", "true");
}

// Función para cerrar
function cerrarModal() {
    modal.classList.remove("mostrar");
    document.body.classList.remove("bloquear-scroll");
    localStorage.setItem("modalAbierto", "false");
}

// Abrir modal
abrir.addEventListener("click", abrirModal);

// Cerrar modal
cerrar.addEventListener("click", cerrarModal);

// Mantener estado al recargar
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("modalAbierto") === "true") {
        abrirModal();
    }
});