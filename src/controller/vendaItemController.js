import * as dbVendaItem from '../repository/vendaItemRepository.js';

import { Router } from "express";
const endpoints = Router();


endpoints.get('/venda-item/:id', async (req, resp) => {
  let id = req.params.id;

  let item = await dbVendaItem.getVendaItem(id);
  resp.send(item);
})

endpoints.get('/venda-item', async (req, resp) => {
  let itens = await dbVendaItem.listVendaItens();
  resp.send(itens);
})

endpoints.post('/venda-item', async (req, resp) => {
  let item = req.body;

  let id = await dbVendaItem.saveVendaItem(item);
  resp.send({ id });
})

endpoints.put('/venda-item/:id', async (req, resp) => {
  let id = req.params.id;
  let item = req.body;

  let qtd = await dbVendaItem.updateVendaItem(id, item);
  resp.send({ qtd })
})

endpoints.delete('/venda-item/:id', async (req, resp) => {
  let id = req.params.id;

  let qtd = await dbVendaItem.deleteVendaItem(id);
  resp.send({ qtd })
})


export default endpoints;
