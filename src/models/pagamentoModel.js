import { sql, connectDB} from "../config/db.js";

export async function getPagamento() {
    const pool = await connectDB();
    const result = await pool.request().query("select * from Pagamento");
    return result.recordset;
}

export async function getPagamentoId(id) {
    const pool = await connectDB();
    const result = await pool.request().input("id",sql.Int,id).query("select * from Pagamento where id=@id");
    return result.recordset[0];
}

export async function createPagamento (dataHora, valorPago, formaPagamentoId) {
    const pool = await connectDB();
    await pool.request()
    .input("dataHora",sql.DateTime,dataHora)
    .input("valorPago",sql.Decimal(10,2),valorPago)
    .input("formaPagamentoId",sql.Int,formaPagamentoId)
    .query("insert into Pagamento (dataHora, valorPago, formaPagamentoId) values (@dataHora, @valorPago, @formaPagamentoId)");
} 