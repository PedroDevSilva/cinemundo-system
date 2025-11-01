import {getSalas, getSalaId, createSala, updateSala} from "../models/salaModel.js";

export async function getAllSala(req, res) {
    try {
        const result = await getSalas();
        res.status(200).json(result);
    } catch (err) {
    res.status(500).json({ error: err.message });
    }
}


export async function getSala (req,res) {
    try {
        const id = parseInt(req.params.id);
        const result = await getSalaId(id);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function insertSala(req, res) {
  try {
    console.log("REQ BODY:", req.body);
    const { nomeSala,capacidade,tipoProjecao,tiposala,acessibilidade} = req.body;
    await createSala(nomeSala,capacidade,tipoProjecao,tiposala,acessibilidade);
    res.status(201).json({ message: "Sala criada com sucesso!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.error(err);
  }
}

export async function editSala(req,res) {
    try {
      
        console.log("REQ BODY:", req.body);
        const id = parseInt(req.params.id);
        const { nomeSala,capacidade,tipoProjecao,tiposala,acessibilidade } = req.body;
        await updateSala(id, {nomeSala,capacidade,tipoProjecao,tiposala,acessibilidade})
        res.status(200).json({ message: "Sala atualizada com sucesso!"})
    } catch (err) {
        res.status(500).json({ error: err.message})
        console.error(err);
    }
}