import { getIngresso, getIngressoId, createIngresso, updateIngresso, delIngresso } from "../models/ingressoModel.js";

export async function getAllIngressos(req, res) {
  try {
    const result = await getIngresso();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getIngressos (req,res) {
    try {
        const id = parseInt(req.params.id);
        const result = await getIngressoId(id);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function insertIngresso(req, res) {
  try {
    const { numero, dataHora, valorTotal, tipoIngresso, assentoId, pagamentoId } = req.body;
    await createIngresso( numero, dataHora, valorTotal, tipoIngresso, assentoId, pagamentoId );
    res.status(201).json({ message: "Ingresso criado com sucesso!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function editIngresso(req,res) {
    try {
        const id = parseInt(req.params.id);
        const { numero, dataHora, valorTotal, tipoIngresso, assentoId, pagamentoId } = req.body;
        await updateIngresso(id, {numero, dataHora, valorTotal, tipoIngresso, assentoId, pagamentoId})
        res.status(200).json({ message: "Ingresso atualizado com sucesso!"})
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
}

export async function deleteIngresso(req,res) {
    try {
        const id = parseInt(req.params.id);
        await delIngresso(id);
        res.status(200).json({ message: "Ingresso excluído com sucesso!"})
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
}