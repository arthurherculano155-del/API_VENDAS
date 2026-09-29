import * as Service from '../Service/Cliente/clienteService.js'
import * as Validation from '../Validation/Cliente/clienteValidation.js'

import { Router } from "express";
const endpoints = Router();


endpoints.get('/cliente/:id', async (req, resp) => {
  try {
    let id = req.params.id;

    let cliente = await Service.getCliente(id);
    resp.send(cliente);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.get('/cliente', async (req, resp) => {
  try {
    let clientes = await Service.listClientes();

    resp.send(clientes);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.post('/cliente', async (req, resp) => {
  try {
    let cliente = req.body;
    await Validation.saveCliente(cliente.cpf);

    let id = await Service.saveCliente(cliente);
    resp.send({ id });
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.put('/cliente/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let cliente = req.body;

    let qtd = await Service.updateCliente(id, cliente);
    resp.send({ qtd })
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.delete('/cliente/:id', async (req, resp) => {
  try {
    let id = req.params.id;

    let qtd = await Service.deleteCliente(id);
    resp.send({ qtd })
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})


export default endpoints;
