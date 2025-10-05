import { getAcessos, getAcessoId, createAcesso } from "../models/acessoModel.js";

export async function getAllAcessos(req, res) {
  try {
    const result = await getAcessos();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getAcesso (req,res) {
    try {
        const id = parseInt(req.params.id);
        const result = await getAcessoId(id);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function insertAcesso (req, res) {
  try {
    const { dataHora, clienteId } = req.body;
    await createAcesso(dataHora, clienteId);
    res.status(201).json({ message: "Acesso inserido com sucesso!"})
  } catch (err) {
    res.status(500).json({error: err.message});
  }
}