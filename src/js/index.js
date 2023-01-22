/*

objetivo 1 - quando o usuário clicar no botão de ver trailer, devemos abrir a modal com o video do treiler

objetivo 2 - quando o usuário clicar no x devemos fechar a modal

objetivo 1 - quando o usuário clicar no botão de ver trailer, devemos abrir a modal com o video do treiler
 - passo 1 dar um jeito de pegar o elemento que represente o botão na tela usando o js
 - passo 2 dar um jeito de indentificar quando o usuário clicar no botão
 - passo 3 dar um jeito de pegar o elemento da modal no js
 - passo 4 abrir a modal na tela

objetivo 2 - quando o usuário clicar no x devemos fechar a modal
- passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js
- passo 2 - dar um jeito de identificar quando o usuário clicar no x 
- passo 3 - fechar a modal

*/

// passo 1 dar um jeito de pegar o elemento que represente o botão na tela usando o js

const botaotrailer = document.querySelector(".botao-trailer");
const botaofecharmodal = document.querySelector(".fechado-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList. toggle("aberta");
}

    botaotrailer.addEventListener("click", () => {
       alternarModal();
        video.setAttribute("src", linkDoVideo);

});
 
botaoFechadModal.addEventListener("click", () => {
    alternarModal();
    Video.Setattribute("src", "");
})

