import { conectaApi } from "./conectaApi";

async function buscarVideo(){
    const busca = await conectaApi.buscaVideo();
};