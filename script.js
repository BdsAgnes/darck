const changeThemeBtn = document.querySelector("#change-theme");
toggleDarkMode();

// toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark");

}

//  load light or dark mode
function loadTheme() {
    const darkMode = localStorage.getitem("dark")

    if (darkMode) {
        toggleDarkMode();
    }
}

changeThemeBtn.addEventListener("change", function() {
    toggleDarkMode();

    //save or remove dark mode
        localStorage.removeItem("dark");

        if(document.body.classList.contains("dark")) {
            localStorage.setItem("dark", 1);
        }
});