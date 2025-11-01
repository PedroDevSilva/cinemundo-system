import {getAssentos, getAssentoId, createAssento, updateAssento} from "../models/assentoModel.js";

export async function getAllAssento(req, res) {
    try {
        const result = await getAssentos();
        res.status(200).json(result);
    } catch (err) {
    res.status(500).json({ error: err.message });
    }
}


export async function getAssento (req,res) {
    try {
        const id = parseInt(req.params.id);
        const result = await getAssentoId(id);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function insertAssento(req, res) {
  try {
    console.log("REQ BODY:", req.body);
    const { numCadeira,numFileira} = req.body;
    await createAssento(numCadeira,numFileira);
    res.status(201).json({ message: "Assento criado com sucesso!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.error(err);
  }
}

export async function editAssento(req,res) {
    try {
      
        console.log("REQ BODY:", req.body);
        const id = parseInt(req.params.id);
        const { numCadeira,numFileira } = req.body;
        await updateAssento(id, {numCadeira,numFileira})
        res.status(200).json({ message: "Assento atualizado com sucesso!"})
    } catch (err) {
        res.status(500).json({ error: err.message})
        console.error(err);
    }
}