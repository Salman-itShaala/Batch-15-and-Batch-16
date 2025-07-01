function toggleTheme() {
    const htmlEl = document.documentElement;
    const sun = document.getElementById("sun");
    const moon = document.getElementById("moon");

    htmlEl.classList.toggle("dark");
    sun.classList.toggle("hide");
    moon.classList.toggle("hide");
}