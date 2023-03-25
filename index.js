let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {
    // Write your code to manipulate the DOM here
    document.body.classList.toggle("dark-mode");

}

themeButton.addEventListener("click", toggleDarkMode);