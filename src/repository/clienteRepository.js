import { con } from "./connection.js";

export async function buscarClientePorCpf(cpf) {
  const command = `
    SELECT cpf
    FROM cliente
    WHERE cpf = REPLACE(REPLACE(REPLACE(?, '-', ''), '.', ''), ' ', '')
  `;

  const [resposta] = await con.query(command, [cpf]);

  return resposta[0];
}

export async function saveCliente(cliente) {
  const command = `
    insert into cliente (nome, cpf, email, nascimento)
                 VALUES (?, REPLACE(REPLACE(REPLACE(?, '-', ''), '.', ''), ' ', ''), ?, ?)
  `

  const [result] = await con.query(command, [
    cliente.nome,
    cliente.cpf,
    cliente.email,
    cliente.nascimento
  ]);

  return result.insertId;
}


export async function getCliente(id) {
  const command = `
    select id,
           nome,
           cpf,
           email,
           nascimento
     from cliente
    where id = ?
  `

  const [linhas] = await con.query(command, [id])
  return linhas[0];
}


export async function listClientes() {
  const command = `
    select id,
           nome,
           cpf,
           email,
           nascimento
     from cliente
  `

  const [linhas] = await con.query(command, [])
  return linhas;
}


export async function updateCliente(id, cliente) {
  const command = `
    update cliente
       set nome = ?,
           cpf = ?,
           email = ?,
           nascimento = ?
     where id = ?
  `

  const [result] = await con.query(command, [
    cliente.nome,
    cliente.cpf,
    cliente.email,
    cliente.nascimento,
    id
  ]);
  return result.affectedRows;
}


export async function deleteCliente(id) {
  const command = `
    delete from cliente where id = ?
  `

  const [result] = await con.query(command, [id])
  return result.affectedRows;
}
