// MENU MOBILE
const btnMenu = document.getElementById("btn-menu");
const menuLista = document.querySelector("nav ul");

btnMenu.addEventListener("click", () => {
    menuLista.classList.toggle("show");
});

// FORMULÁRIO - MENSAGEM DE SUCESSO
const form = document.getElementById("form-contato");
const msg = document.getElementById("msg-sucesso");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    msg.classList.remove("hidden");
    form.reset();
});
