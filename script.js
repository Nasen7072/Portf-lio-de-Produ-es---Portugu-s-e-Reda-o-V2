// MENU MOBILE
const btn = document.getElementById("btn-menu");
const lista = document.getElementById("menu-lista");

btn.addEventListener("click", () => {
    lista.classList.toggle("show");
});

// MENSAGEM DO FORMULÁRIO
const form = document.getElementById("form-contato");
const msg = document.getElementById("msg");

form.addEventListener("submit", e => {
    e.preventDefault();
    msg.classList.remove("hidden");
    form.reset();
});
