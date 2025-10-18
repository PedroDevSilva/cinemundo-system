import { getPagamento, getPagamentoId, createPagamento } from "../models/pagamentoModel.js";

export async function getAllPagamentos(req,res) {
    try {
        const result = await getPagamento();
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function getPagamentos (req,res) {
    try {
        const id = parseInt(req.params.id);
        const result = await getPagamentoId(id);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function insertPagamento (req, res) {
  try {
    const { dataHora, valorPago, formaPagamentoId } = req.body;
    await createPagamento(dataHora, valorPago, formaPagamentoId);
    res.status(201).json({ message: "Pagamento inserido com sucesso!"})
  } catch (err) {
    res.status(500).json({error: err.message});
  }
}