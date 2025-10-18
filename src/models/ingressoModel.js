import { sql, connectDB } from "../config/db.js";

export async function getIngresso() {
    const pool = await connectDB();
    const result = await pool.request()
    .query("select * from Ingresso");
    return result.recordset;
}

export async function getIngressoId(id) {
    const pool = await connectDB();
    const result = await pool.request()
    .input("id",sql.Int,id)
    .query("select * from Ingresso where id=@id");
    return result.recordset[0];
}

export async function createIngresso(numero, dataHora, valorTotal, tipoIngresso, assentoId, pagamentoId){
    const pool = await connectDB();
    await pool.request()
    .input("numero",sql.VarChar,numero)
    .input("dataHora",sql.DateTime,dataHora)
    .input("valorTotal",sql.Decimal(10,2),valorTotal)
    .input("tipoIngresso",sql.VarChar,tipoIngresso)
    .input("assentoId",sql.Int,assentoId)
    .input("pagamentoId",sql.Int,pagamentoId)
    .query(`
            insert into Ingresso (numero, dataHora, valorTotal, tipoIngresso, assentoId, pagamentoId)
            values (@numero, @dataHora, @valorTotal, @tipoIngresso, @assentoId, @pagamentoId)`)
}

export async function updateIngresso(id,{numero, dataHora, valorTotal, tipoIngresso, assentoId, pagamentoId}) {
    const pool = await connectDB();
    await pool.request()
    .input("id",sql.Int,id)
    .input("numero",sql.VarChar,numero)
    .input("dataHora",sql.DateTime,dataHora)
    .input("valorTotal",sql.Decimal(10,2),valorTotal)
    .input("tipoIngresso",sql.VarChar,tipoIngresso)
    .input("assentoId",sql.Int,assentoId)
    .input("pagamentoId",sql.Int,pagamentoId)
    .query(`
            update Ingresso set numero=@numero, dataHora=@dataHora, valorTotal=@valorTotal,
            tipoIngresso=@tipoIngresso, assentoId=@assentoId, pagamentoId=@pagamentoId, 
            where id=@id`)
}

export async function delIngresso(id) {
    const pool = await connectDB();
    await pool.request()
    .input("id",sql.Int,id)
    .query("delete from Ingresso where id=@id")
}