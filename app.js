// VARIÁVEIS GLOBAIS
const url = "https://rickandmortyapi.com/api/character/?page=1";

let json;

let urlAnterior = "";
let urlProxima = url;

// OBTENDO A INSTÂNCIA DOS COMPONENTES HTML
const textTotalPersonagens = document.getElementById("totalPersonagens");
const textTotalDePaginas = document.getElementById("totalDePaginas");
const paginaAtual = document.getElementById("paginaAtual");
const divListaPersonagens = document.getElementById("listaPersonagens");


const btnProximo = document.getElementById("btnProximo");
const btnAnterior = document.getElementById("btnAnterior");

//Adicionar eventos de click no botão
btnProximo.addEventListener("click", () => {
    urlProxima = json.info.next;
    carregar(urlProxima);
});

btnAnterior.addEventListener("click", () =>{
    urlAnterior = json.info.prev;
    if( urlAnterior != null){
        carregar(urlAnterior);
    }
});




async function carregar(urlDaConsulta) {

    //Extrair o valor do parâmetro page da URL
    const urlCaminho = new URL(urlDaConsulta);
    const numeroDaPagina = urlCaminho.searchParams.get("page");

    
    paginaAtual.innerText = `Página atual ${numeroDaPagina}`;

    

    divListaPersonagens.innerHTML = "";
    console.log("Buscando dados na API...");
    const response = await fetch(urlDaConsulta);
    json = await response.json();

    //Mostrando o total de personagens
    const totalPersonagens = json.info.count;
    console.log("Total de personagens:", totalPersonagens);
    textTotalPersonagens.innerText = `A API retornou ${totalPersonagens} personagens.`;// Exibindo o total de personagens na tela do usuário

    //Mostrando total de páginas
    const totalPaginas = Number(json.info.pages);
    console.log("Total de páginas:", totalPaginas);
    textTotalDePaginas.innerText = `A api retornou ${totalPaginas} de páginas.`; // Exibindo o total de páginas na tela do usuário

    


    const quantidadePersonagensDaPagina = Number(json.results.length);
    let contador = 0;

    while (contador < quantidadePersonagensDaPagina) {

        //Contadorntruir lista de personagens
        //Obter a quantidade de personagens
        const idPersonagem =json.results[contador].id;
        const fotoPersonagem = json.results[contador].image;
        const nomePersonagem = json.results[contador].name;
        const statusPersonagem = json.results[contador].status;
        const especiePersonagem = json.results[contador].species;
        
        divListaPersonagens.innerHTML += `
            <img src="${fotoPersonagem}" alt="Foto do personagem">
            <div>
               <a href ="detalhesPersonagem.html?id=${idPersonagem}"><h1>${nomePersonagem}</h1></a>
                <p>Status: ${statusPersonagem}</p>
                <p>Espécie: ${especiePersonagem}</p>
            </div>
   `;
        contador++;


    }



}

carregar(url);