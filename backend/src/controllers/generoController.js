import { getGeneros, getGeneroId, createGenero } from "../models/generoModel.js";

export async function getAllGeneros(req, res) {
  try {
    const result = await getGeneros();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getGenero (req,res) {
    try {
        const id = parseInt(req.params.id);
        const result = await getGeneroId(id);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function insertGenero (req, res) {
  try {
    const { nome, descricao } = req.body;
    await createGenero(nome, descricao);
    res.status(201).json({ message: "Gênero inserido com sucesso!"})
  } catch (err) {
    res.status(500).json({error: err.message});
  }
}
