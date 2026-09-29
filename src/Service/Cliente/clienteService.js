import * as dbCliente from '../../repository/clienteRepository.js';

export async function getCliente(id){
    const resposta = await dbCliente.getCliente(id)

    return resposta;
}

export async function listClientes(){
     const resposta = await dbCliente.listClientes();

     return resposta;
}

export async function saveCliente(cliente){
    const resposta = await dbCliente.saveCliente(cliente);

    return resposta;
}

export async function updateCliente(id, cliente){
    const resposta = await dbCliente.updateCliente(id, cliente);

    return resposta;
}