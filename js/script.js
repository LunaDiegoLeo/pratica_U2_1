// =============================
// Arreglo de colores de fondo
// =============================
const colors = ["#f4f4f4", "#ffcccc", "#ccffcc", "#ccccff", "#ffffcc"];
let colorIndex = 0;


// =============================
// Datos de los integrantes
// =============================
const members = [
    {
        photo: "img/WhatsApp Image 2026-03-03 at 12.19.08 PM.jpeg",
        desc: "Primer Integrante: Alondra Yaneli Boyzo Rodriguez - Soy estudiante de Ingeniería en Sistemas Computacionales."
    },
    {
        photo: "img/image.jfif",
        desc: "Segundo Integrante: Diego Leonardo Hernández Luna — Estudiante de Ingeniería en Sistemas Computacionales. Intereses: desarrollo web, algoritmos y bases de datos. Habilidades: JavaScript, Python y SQL. Rol en el proyecto: desarrollador frontend. Disfruta resolver problemas, aprender nuevas tecnologías y colaborar en equipo."
    }
];

let memberIndex = 0;


// =============================
// Evento: Cambio de color
// =============================
document.getElementById("colorButton").addEventListener("click", () => {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
});


// =============================
// Evento: Cambio de integrante
// =============================
document.getElementById("switchButton").addEventListener("click", () => {
    memberIndex = (memberIndex + 1) % members.length;

    document.getElementById("member-photo").src =
        members[memberIndex].photo;

    document.getElementById("member-desc").textContent =
        members[memberIndex].desc;
});