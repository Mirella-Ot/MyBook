var database = require("../database/config")

function transferir(){
    var instrucao = `select * from lista_adicionados join lista_livros on idLista = ${fkLivro} where fkUsuario = ${fkUsuario};`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function addFavoritos(fkUsuario, fkLivro) {
    var instrucao = `
    insert into lista_adicionados values
        (null, ${fkUsuario}, ${fkLivro} );`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
    
}

function lista_livros(){
    var instrucao = `select idLista as idLista from lista_livros;`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}



module.exports = {
    transferir,
    addFavoritos,
    lista_livros
};