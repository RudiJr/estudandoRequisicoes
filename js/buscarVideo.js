import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";


/**
 * This function searches for a video using data input and constructs a card with the video's
 * information.
 */
async function buscarVideo(){
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");
    busca.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
};

/* This code is adding an event listener to the `botaoDePesquisa` element, which is a button that
triggers a search for a video. The event listener is listening for a 'click' event on the button,
and when the event is triggered, it calls the `buscarVideo` function with the `evento` parameter. */
const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");
botaoDePesquisa.addEventListener('click', evento => buscarVideo(evento));