/**
 * This function fetches a list of videos from a local server and returns it as a JSON object.
 * @returns The function `listaVideos()` is returning a Promise that resolves to the JSON data
 * retrieved from the URL "http://localhost:3000/videos".
 */
async function listaVideos() {
  const conexao = await fetch("http://localhost:3000/videos");
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
};

/**
 * The function creates a new video by sending a POST request to a server with the provided title,
 * description, URL, and image.
 * @param titulo - The title of the video being created.
 * @param descricao - The description of the video, which is being concatenated with the string "mil
 * visualizações" (thousand views) before being sent to the server.
 * @param url - The URL of the video being created.
 * @param imagem - The "imagem" parameter is a string representing the URL of the image associated with
 * the video being created.
 * @returns a Promise that resolves to the JSON response from the HTTP POST request made to the
 * "http://localhost:3000/videos" endpoint. The JSON response is an object that represents the newly
 * created video, with properties such as "titulo", "descricao", "url", and "imagem".
 */
async function criaVideo(titulo, descricao, url, imagem) {
  const conexao = await fetch("http://localhost:3000/videos", {
      method: "POST",
      headers: {
          "Content-type": "application/json"
      },
      body: JSON.stringify({
          titulo: titulo,
          descricao: `${descricao} mil visualizações`,
          url: url,
          imagem: imagem
      })
  });

  if(!conexao.ok) {
    throw new Error("Não foi possível enviar o vídeo");
  }
  
  const conexaoConvertida = conexao.json();
  return conexaoConvertida;
};

/**
 * This function fetches videos from a local server based on a search term and returns the results in
 * JSON format.
 * @returns The function `buscaVideo` is returning a Promise that resolves to the JSON data obtained
 * from the specified URL (`http://localhost:3000/videos?q=`).
 */
async function buscaVideo(termoDeBusca) {
  const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
};

export const conectaApi = {
  listaVideos,
  criaVideo,
  buscaVideo
}