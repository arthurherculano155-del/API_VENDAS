import * as dbLivro from "../../repository/livroRepository.js"

export async function getLivro(id){
    const resposta = await dbLivro.getLivro(id);

    return resposta;
}

export async function listLivros(){
    const resposta = await dbLivro.listLivros()

    return resposta;
}

export async function saveLivro(livro){
    const resposta = await dbLivro.saveLivro(livro)

    return resposta;
}

export async function updateLivro(id, livro){
    const resposta = await dbLivro.updateLivro(id, livro);

    return resposta;
}

export async function deleteLivro(id){
    const resposta = await dbLivro.deleteLivro(id);

    return resposta;
}