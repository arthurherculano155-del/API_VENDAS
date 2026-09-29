import { saveLivro } from '../repository/livroRepository.js';
import * as Service from '../Service/Livro/livroService.js';

import { Router } from "express";
const endpoints = Router();


endpoints.get('/livro/:id', async (req, resp) => {
  try {
    let id = req.params.id;

    let livro = await Service.getLivro(id);
    resp.send(livro);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.get('/livro', async (req, resp) => {
  try {
    let livros = await Service.listLivros();
    resp.send(livros);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.post('/livro', async (req, resp) => {
  try {
    let livro = req.body;
    await saveLivro(livro);

    let id = await Service.saveLivro(livro);
    resp.send({ id });
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.put('/livro/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let livro = req.body;

    let qtd = await Service.updateLivro(id, livro);
    resp.send({ qtd })
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.delete('/livro/:id', async (req, resp) => {
  try {
    let id = req.params.id;

    let qtd = await Service.deleteLivro(id);
    resp.send({ qtd })
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})


export default endpoints;
