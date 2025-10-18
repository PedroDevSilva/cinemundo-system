import { sql, connectDB} from "../config/db.js";

export async function getFormaPagamento() {
    const pool = await connectDB();
    const result = await pool.request().query("select * from FormaPagamento");
    return result.recordset;
}

export async function getFormaPagamentoId(id) {
    const pool = await connectDB();
    const result = await pool.request().input("id",sql.Int,id).query("select * from FormaPagamento where id=@id");
    return result.recordset[0];
}

export async function createFormaPagamento (descricao, valorAcrescimo) {
    const pool = await connectDB();
    await pool.request()
    .input("descricao",sql.VarChar,descricao)
    .input("valorAcrescimo",sql.Decimal(10,2),valorAcrescimo)
    .query("insert into FormaPagamento (descricao, valorAcrescimo) values (@descricao, @valorAcrescimo)");
}
