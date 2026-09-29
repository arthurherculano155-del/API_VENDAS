import { con } from "./connection.js"; 

export async function getLivroPorTitulo(titulo){
    
}

export async function saveLivro(livro) {
  const command = `
    insert into livro (titulo, autor, genero, preco, estoque)
               values (?, ?, ?, ?, ?)
  `

  const [result] = await con.query(command, [
    livro.titulo,
    livro.autor,
    livro.genero,
    livro.preco,
    livro.estoque
  ]);

  return result.insertId;
}


export async function getLivro(id) {
  const command = `
    select id,
           titulo,
           autor,
           genero,
           preco,
           estoque
     from livro
    where id = ?
  `

  const [linhas] = await con.query(command, [id])
  return linhas[0];
}


export async function listLivros() {
  const command = `
    select id,
           titulo,
           autor,
           genero,
           preco,
           estoque
     from livro
  `

  const [linhas] = await con.query(command, [])
  return linhas;
}


export async function updateLivro(id, livro) {
  const command = `
    update livro
       set titulo = ?,
           autor = ?,
           genero = ?,
           preco = ?,
           estoque = ?
     where id = ?
  `

  const [result] = await con.query(command, [
    livro.titulo,
    livro.autor,
    livro.genero,
    livro.preco,
    livro.estoque,
    id
  ]);
  return result.affectedRows;
}


export async function deleteLivro(id) {
  const command = `
    delete from livro where id = ?
  `

  const [result] = await con.query(command, [id])
  return result.affectedRows;
}
