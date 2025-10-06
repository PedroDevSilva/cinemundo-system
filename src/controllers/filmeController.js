import { getFilmes, getFilmeId, createFilme, updateFilme, delFilme } from "../models/filmeModel.js";

export async function getAllFilmes(req, res) {
  try {
    const result = await getFilmes();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getFilme (req,res) {
    try {
        const id = parseInt(req.params.id);
        const result = await getFilmeId(id);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function insertFilme(req, res) {
  try {
    const { titulo, sinopse, diretor, elenco, classificacaoIndicativa, duracao, poster, anoLancamento, produtora } = req.body;
    await createFilme(titulo, sinopse, diretor, elenco, classificacaoIndicativa, duracao, poster, anoLancamento, produtora );
    res.status(201).json({ message: "Filme criado com sucesso!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function editFilme(req,res) {
    try {
        const id = parseInt(req.params.id);
        const { titulo, sinopse, diretor, elenco, classificacaoIndicativa, duracao, poster, anoLancamento, produtora } = req.body;
        await updateFilme(id, {titulo, sinopse, diretor, elenco, classificacaoIndicativa, duracao, poster, anoLancamento, produtora})
        res.status(200).json({ message: "Filme atualizado com sucesso!"})
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
}

export async function deleteFilme(req,res) {
    try {
        const id = parseInt(req.params.id);
        await delFilme(id);
        res.status(200).json({ message: "Filme excluído com sucesso!"})
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
}
