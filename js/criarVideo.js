import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
  
    /* `const descricao = Math.floor(Math.random() * 10).toString();` generates a random number between
    0 and 9 using `Math.random()` and rounds it down to the nearest integer using `Math.floor()`.
    The resulting number is then converted to a string using `.toString()` and assigned to the
    variable `descricao`. */
    const descricao = Math.floor(Math.random() * 10).toString();
    try{
        await conectaApi.criaVideo(titulo, descricao, url, imagem); // <- mesma ordem do conecta Api (titulo, descricao, url, imagem)

        window.location.href = "../pages/envio-concluido.html";
    }catch(e){
        alert(e);
    };
};

/* This line of code is adding an event listener to the `formulario` element that listens for a
"submit" event. When the event is triggered (i.e. the user submits the form), the `criarVideo`
function is called with the event obj'ect passed as an argument. */
formulario.addEventListener("submit", evento => criarVideo(evento));