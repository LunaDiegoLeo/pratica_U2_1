// Esperamos a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("colorButton");

    // Verificamos que el botón exista
    if (!button) {
        console.error("No se encontró el botón con ID 'colorButton'");
        return;
    }

    const colors = ["#f4f4f4", "#ffcccc", "#ccffcc", "#ccccff", "#ffffcc"];
    let index = 0;

    function changeBackgroundColor() {
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length; // Reinicio automático con módulo
    }

    button.addEventListener("click", changeBackgroundColor);

});