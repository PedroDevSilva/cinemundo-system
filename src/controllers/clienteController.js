import { getClientes, getClienteId, createCliente, updateCliente, delCliente } from "../models/clienteModel.js";

export async function getAllClientes(req, res) {
  try {
    const result = await getClientes();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getCliente (req,res) {
    try {
        const id = parseInt(req.params.id);
        const result = await getClienteId(id);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function insertCliente(req, res) {
  try {
    const { cpf,nomeCompleto,dataAniversario,enderecoCompleto,celular,email,senha,pagaMeiaEntrada } = req.body;
    await createCliente(cpf,nomeCompleto,dataAniversario,enderecoCompleto,celular,email,senha,pagaMeiaEntrada );
    res.status(201).json({ message: "Usuário criado com sucesso!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function editCliente(req,res) {
    try {
        const id = parseInt(req.params.id);
        const { cpf,nomeCompleto,dataAniversario,enderecoCompleto,celular,email,senha,pagaMeiaEntrada } = req.body;
        await updateCliente(id, {cpf,nomeCompleto,dataAniversario,enderecoCompleto,celular,email,senha,pagaMeiaEntrada})
        res.status(200).json({ message: "Usuário atualizado com sucesso!"})
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
}

export async function deleteCliente(req,res) {
    try {
        const id = parseInt(req.params.id);
        await delCliente(id);
        res.status(200).json({ message: "Usuário excluído com sucesso!"})
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
}