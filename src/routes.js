import cliente from './controller/clienteController.js'
import livro from './controller/livroController.js'
import venda from './controller/vendaController.js'
import vendaItem from './controller/vendaItemController.js'


export function addRoutes(api) {
  api.use(cliente);
  api.use(livro);
  api.use(venda);
  api.use(vendaItem);
}

