import { getFormaPagamento, getFormaPagamentoId, createFormaPagamento} from "../models/formaPagamentoModel.js";

export async function getAllFormaPagamento(req, res) {
    try {
        const result = await getFormaPagamento();
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function getFormasPagamento(req, res) {
    try {
        const id = parseInt(req.params.id);
        const result = await getFormaPagamentoId(id);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function insertFormaPagamento (req, res) {
    try {
      const { descricao, valorAcrescimo } = req.body;
      await createFormaPagamento(descricao, valorAcrescimo);
      res.status(201).json({ message: "Forma de Pagamento inserido com sucesso!"})
    } catch (err) {
      res.status(500).json({error: err.message});
    }
}
