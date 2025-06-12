const input = document.getElementById("password-input");

function toggle() {
    if (input.getAttribute("type") === "text") {
        input.setAttribute("type", "password");
    } else {
        input.setAttribute("type", "text");
    }
}