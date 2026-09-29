import * as dbVenda from '../repository/vendaRepository.js';

import { Router } from "express";
const endpoints = Router();


endpoints.get('/venda/:id', async (req, resp) => {
  let id = req.params.id;

  let venda = await dbVenda.getVenda(id);
  resp.send(venda);
})

endpoints.get('/venda', async (req, resp) => {
  let vendas = await dbVenda.listVendas();
  resp.send(vendas);
})

endpoints.post('/venda', async (req, resp) => {
  let venda = req.body;

  let id = await dbVenda.saveVenda(venda);
  resp.send({ id });
})

endpoints.put('/venda/:id', async (req, resp) => {
  let id = req.params.id;
  let venda = req.body;

  let qtd = await dbVenda.updateVenda(id, venda);
  resp.send({ qtd })
})

endpoints.delete('/venda/:id', async (req, resp) => {
  let id = req.params.id;

  let qtd = await dbVenda.deleteVenda(id);
  resp.send({ qtd })
})


export default endpoints;
