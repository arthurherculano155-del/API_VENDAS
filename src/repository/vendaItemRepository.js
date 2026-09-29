import { con } from "./connection.js";


export async function saveVendaItem(item) {
  const command = `
    insert into venda_item (id_venda, id_livro, preco)
                    values (?, ?, ?)
  `

  const [result] = await con.query(command, [
    item.idVenda,
    item.idLivro,
    item.preco
  ]);

  return result.insertId;
}


export async function getVendaItem(id) {
  const command = `
    select id,
           id_venda   as idVenda,
           id_livro   as idLivro,
           preco
     from venda_item
    where id = ?
  `

  const [linhas] = await con.query(command, [id])
  return linhas[0];
}


export async function listVendaItens() {
  const command = `
    select id,
           id_venda   as idVenda,
           id_livro   as idLivro,
           preco
     from venda_item
  `

  const [linhas] = await con.query(command, [])
  return linhas;
}


export async function updateVendaItem(id, item) {
  const command = `
    update venda_item
       set id_venda = ?,
           id_livro = ?,
           preco = ?
     where id = ?
  `

  const [result] = await con.query(command, [
    item.idVenda,
    item.idLivro,
    item.preco,
    id
  ]);
  return result.affectedRows;
}


export async function deleteVendaItem(id) {
  const command = `
    delete from venda_item where id = ?
  `

  const [result] = await con.query(command, [id])
  return result.affectedRows;
}
