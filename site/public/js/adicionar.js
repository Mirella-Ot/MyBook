var nomeUsuario = sessionStorage.getItem('NOME_USUARIO');
var fkUsuario = sessionStorage.getItem("ID_USUARIO");
var fkLivro = sessionStorage.getItem("ID_LISTA");
function adicionar_lista(){

    // window.location = "./teste2.html"

    fetch(`/favoritos/addFavoritos/${fkUsuario}/${fkLivro}`)
    .then(res => res.json())
    .then((resposta)=> {
        var vetor = (resposta)
        console.log(vetor);

        for (var i = 0; i < vetor.length; i++) {
            const element = vetor[i]
            var newImg = document.createElement("img")
            newImg.src = element.url
            newImg.style.height = "100px"
            newImg.style.width = "100px";

            div_resultado2.innerHTML += `<br> <br> <br> <br> <br>
            <div class="imgLivro">

                <img src="${element.imagem.idLista}">

            </div>`
            div_resultado.innerHTML += `

            <br> <br> <br> <br> <br>
            
            <div id="div_resultado">
                <span>Nome</span>
                <p>${element.nomeLivro.idLista}</p>
                <span>Sinopse</span>
                <p>${element.descricao.idLista}</p>
                <span>Autor</span>
                <p>${element.autor.idLista}</p>
                <span>Gênero</span>
                <p>${element.genero.idLista}</p>

                <button onclick = "adicionar_lista()" >Adicionar a minha lista</button>
            </div>
          `
        }
    }
)

}