import { conectaApi } from "./conectaApi";

/**
 * This function searches for a video using data input and an API connection.
 */
async function buscarVideo(){
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    console.log(busca);
};

/* This code is adding an event listener to the `botaoDePesquisa` element, which is a button that
triggers a search for a video. The event listener is listening for a 'click' event on the button,
and when the event is triggered, it calls the `buscarVideo` function with the `evento` parameter. */
const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");
botaoDePesquisa.addEventListener('click', evento => buscarVideo(evento));