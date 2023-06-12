import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

/**
 * This is an async function that searches for a video using data from a form input, connects to an
 * API, and constructs a card with information about the video.
 */
async function buscarVideo(evento) {
 /* `evento.preventDefault();` is preventing the default behavior of the event. In this case, it is
 preventing the default behavior of a form submission, which would cause the page to reload. By
 calling `preventDefault()`, the function is able to handle the form submission without reloading
 the page. */
    evento.preventDefault();
    
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

  /* This code is removing all child elements from the `lista` element. It does this by using a `while`
  loop to repeatedly remove the first child element of `lista` until there are no more child
  elements left. This is useful for clearing the list before adding new elements to it. */
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    };

    /* This code is iterating over each element in the `busca` array and constructing a card for each
    video using the `constroiCard` function. The constructed card is then appended as a child
    element to the `lista` element. In other words, it is adding a card with information about each
    video to a list on the webpage. */
    busca.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));

    if(busca.length == 0){
      lista.innerHTML = `<h2 class="mensagem__titulo">Não existem mensagem com esse termo</h2>`
    };
};

/* This code is adding an event listener to the `botaoDePesquisa` element, which is a button that
triggers a search for a video. The event listener is listening for a 'click' event on the button,
and when the event is triggered, it calls the `buscarVideo` function with the `evento` parameter. */
const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");
botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento))