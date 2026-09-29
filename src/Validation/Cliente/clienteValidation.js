import * as Cliente from "../../repository/clienteRepository.js"

export async function saveCliente(cpf){
    const validacao = await Cliente.buscarClientePorCpf(cpf);

    if(validacao != null)
        throw new Error("Cliente já cadastrado");
}