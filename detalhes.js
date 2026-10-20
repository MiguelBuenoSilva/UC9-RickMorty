const urlAtual = window.location.href;
const url = new URL(urlAtual);

const idPersonagem = url.searchParams.get("id");
const urlConsulta = `https://rickandmortyapi.com/api/character/${idPersonagem}`;


const divDetalhes = document.getElementById("divDetalhes");

const response = await fetch(urlConsulta);
const personagem = await response.json();


divDetalhes.innerHTML = `
  <img src="${personagem.image}" alt="Foto do personagem">


`;




           