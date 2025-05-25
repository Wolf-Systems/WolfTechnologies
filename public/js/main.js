const cloud = document.getElementById("cloud");
const barraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");

const modal = document.getElementById("modal-1");
const abrir = document.getElementById("abrir-modal-1");
const cerrar = document.getElementById("cerrar-modal");

const modal2 = document.getElementById("modal-2");
const abrir2 = document.getElementById("abrir-modal-2");
const cerrar2 = document.getElementById("cerrar-modal2");

const modal3 = document.getElementById("modal-3");
const abrir3 = document.getElementById("abrir-modal-3");
const cerrar3 = document.getElementById("cerrar-modal3");

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


//MODAL 1

// Función para abrir
function Abrir_Modal_1() {
    modal.classList.add("mostrar");
    document.body.classList.add("bloquear-scroll");
    localStorage.setItem("modalAbierto", "true");
    localStorage.setItem("modalAbiertoID", "modal-1");
}

// Función para cerrar
function Cerrar_Modal_1() {
    modal.classList.remove("mostrar");
    document.body.classList.remove("bloquear-scroll");
    localStorage.setItem("modalAbierto", "false");
    localStorage.removeItem("modalAbiertoID");
}

// Abrir modal
abrir.addEventListener("click", Abrir_Modal_1);

// Cerrar modal
cerrar.addEventListener("click", Cerrar_Modal_1);


//MODAL 2

// Función para abrir
function Abrir_Modal_2() {
    modal2.classList.add("mostrar");
    document.body.classList.add("bloquear-scroll");
    localStorage.setItem("modalAbierto", "true");
    localStorage.setItem("modalAbiertoID", "modal-2");
}

// Función para cerrar
function Cerrar_Modal_2() {
    modal2.classList.remove("mostrar");
    document.body.classList.remove("bloquear-scroll");
    localStorage.setItem("modalAbierto", "false");
    localStorage.removeItem("modalAbiertoID");
}

// Abrir modal
abrir2.addEventListener("click", Abrir_Modal_2);

// Cerrar modal
cerrar2.addEventListener("click", Cerrar_Modal_2);


//MODAL 3

// Función para abrir
function Abrir_Modal_3() {
    modal3.classList.add("mostrar");
    document.body.classList.add("bloquear-scroll");
    localStorage.setItem("modalAbierto", "true");
    localStorage.setItem("modalAbiertoID", "modal-3");
}

// Función para cerrar
function Cerrar_Modal_3() {
    modal3.classList.remove("mostrar");
    document.body.classList.remove("bloquear-scroll");
    localStorage.setItem("modalAbierto", "false");
    localStorage.removeItem("modalAbiertoID");
}

// Abrir modal
abrir3.addEventListener("click", Abrir_Modal_3);

// Cerrar modal
cerrar3.addEventListener("click", Cerrar_Modal_3);

// Restaurar modal abierto tras recarga
window.addEventListener("DOMContentLoaded", () => {
    const modalAbierto = localStorage.getItem("modalAbiertoID");

    if (modalAbierto === "modal-1") {
        modal.classList.add("mostrar");
        document.body.classList.add("bloquear-scroll");
    } else if (modalAbierto === "modal-2") {
        modal2.classList.add("mostrar");
        document.body.classList.add("bloquear-scroll");
    } else if (modalAbierto === "modal-3") {
        modal3.classList.add("mostrar");
        document.body.classList.add("bloquear-scroll");
    }
});
