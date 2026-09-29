import { con } from "./connection.js";


export async function saveVenda(venda) {
  const command = `
    insert into venda (id_cliente, data, status)
               values (?, ?, ?)
  `

  const [result] = await con.query(command, [
    venda.idCliente,
    venda.data,
    venda.status
  ]);

  return result.insertId;
}


export async function getVenda(id) {
  const command = `
    select id,
           id_cliente   as idCliente,
           data,
           status
     from venda
    where id = ?
  `

  const [linhas] = await con.query(command, [id])
  return linhas[0];
}


export async function listVendas() {
  const command = `
    select id,
           id_cliente   as idCliente,
           data,
           status
     from venda
  `

  const [linhas] = await con.query(command, [])
  return linhas;
}


export async function updateVenda(id, venda) {
  const command = `
    update venda
       set id_cliente = ?,
           data = ?,
           status = ?
     where id = ?
  `

  const [result] = await con.query(command, [
    venda.idCliente,
    venda.data,
    venda.status,
    id
  ]);
  return result.affectedRows;
}


export async function deleteVenda(id) {
  const command = `
    delete from venda where id = ?
  `

  const [result] = await con.query(command, [id])
  return result.affectedRows;
}
