const urlAtual = window.location.href;
const url = new URL(urlAtual);

const idPersonagem = url.searchParams.get("id");
const urlConsulta = `https://rickandmortyapi.com/api/character/${idPersonagem}`;


const divDetalhes = document.getElementById("divDetalhes");

const response = await fetch(urlConsulta);
const personagem = await response.json();


divDetalhes.innerHTML = `
  <img src="${personagem.image}" alt="Foto do personagem">
  <h1>Nome do Personagem: ${personagem.name}</h1>
  <h3>Status: ${personagem.status}</h3>
  <h3>Espécie: ${personagem.species}</h3>
  <h3>Genêro: ${personagem.gender}</h3>
  <h3>Localização: ${personagem.location.name}</h3>


`;




