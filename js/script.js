// =============================
// Arreglo de colores de fondo
// =============================
const colors = [
"#f4f4f4","#ffcccc","#ccffcc","#ccccff","#ffffcc",
"#ff9999","#99ff99","#9999ff","#ffcc99","#cc99ff",
"#66cccc","#ff6666","#66ff66","#6666ff","#ffcc66",
"#66ffcc","#ccff66","#ff66cc","#c0c0c0","#ffb3ba",
"#baffc9","#bae1ff","#ffffba","#ffdfba","#e2f0cb",
"#c9c9ff","#ffd1dc","#d5b6ff","#b5ead7","#ffdac1",
"#e0bbe4","#957dad","#fec8d8","#d291bc","#f6abb6",
"#84a9ac","#3b6978","#204051","#e4e3e3","#ffaaa5",
"#ffd3b6","#dcedc1","#a8e6cf","#ff8b94","#a0ced9",
"#ffc3a0","#caffbf","#9bf6ff","#bdb2ff","#ffc6ff",
"#fdffb6","#fffffc","#d0f4de","#fef9c3","#fcd5ce",
"#fae1dd","#e2ece9","#bee1e6","#cdb4db","#ffc8dd",
"#bde0fe","#a2d2ff","#ffadad","#ffd6a5","#fdffb6",
"#caffbf","#9bf6ff","#a0c4ff","#bdb2ff","#ffc6ff",
"#ffffba","#ffb7b2","#ffdac1","#e2f0cb","#b5ead7",
"#c7ceea","#f1f0c0","#a1eafb","#ff9a8b","#ffb347",
"#87cefa","#dda0dd","#98fb98","#ff7f7f","#40e0d0",
"#ffdead","#dda15e","#bc6c25","#8ecae6","#219ebc",
"#023047","#ff006e","#8338ec","#3a86ff","#fb5607"
];
const darkmodeColor=["#121212","#ffffff"];
const darkmodeColordiv=["#5f5f5f","#ffffff"];
const darkmodeColordiv2=["#8f8f8f","#ffffff"];
const darkmodeText=["#ffffff","#000000"];
const darkmodeText2=["#ffffff","#6c757d"];
let darkmodeIndex=0;
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

document.getElementById("darkModeBtn").addEventListener("click", () => {
    document.body.style.backgroundColor = darkmodeColor[darkmodeIndex];
    document.getElementById("container").style.backgroundColor = darkmodeColordiv[darkmodeIndex];
    document.getElementById("container2").style.backgroundColor = darkmodeColordiv2[darkmodeIndex];
    document.getElementById("titulo").style.color = darkmodeText[darkmodeIndex];
    document.getElementById("member-desc").style.color = darkmodeText2[darkmodeIndex];
    darkmodeIndex = (darkmodeIndex + 1) % darkmodeColor.length;
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