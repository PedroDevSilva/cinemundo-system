import {getSessoes, getSessaoId, createSessao, updateSessao} from "../models/sessaoModel.js";

export async function getAllSessao(req, res) {
  try {
    const result = await getSessoes();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getSessao (req,res) {
    try {
        const id = parseInt(req.params.id);
        const result = await getSessaoId(id);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function insertSessao(req, res) {
  try {
        console.log("REQ BODY:", req.body);
    const { data,horarioInicial,horarioFinal,linguaOrigem,lingualegenda,linguaDublagem} = req.body;
    await createSessao(data,horarioInicial,horarioFinal,linguaOrigem,lingualegenda,linguaDublagem);
    res.status(201).json({ message: "Sala criada com sucesso!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function editSessao(req,res) {
    try {
      
        console.log("REQ BODY:", req.body);
        const id = parseInt(req.params.id);
        const { data,horarioInicial,horarioFinal,linguaOrigem,lingualegenda,linguaDublagem } = req.body;
        await updateSessao(id, {data,horarioInicial,horarioFinal,linguaOrigem,lingualegenda,linguaDublagem})
        res.status(200).json({ message: "Sala atualizada com sucesso!"})
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
}