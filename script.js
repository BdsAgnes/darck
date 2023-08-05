const changeThemeBtn = document.querySelector("#mudar-tema");
alternarModoEscuro();

// Alternar modo escuro

function alternarModoEscuro() {
    document.body.classList.toggle("dark");

}
// Carregar modo claro ou escuro
function loadTheme() {
    const modoEscuro = localStorage.getitem("dark")

    if (modoEscuro) {
        alternarModoEscuro();
    }
}

changeThemeBtn.addEventListener("change", function() {
    alternarModoEscuro();

// Salvar ou remover modo escuro

        localStorage.removeItem("dark");

        if(document.body.classList.contains("dark")) {
            localStorage.setItem("dark", 1);
        }
});