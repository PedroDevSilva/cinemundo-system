import {sql, connectDB} from "../config/db.js";

export async function getAcessos() {
    const pool = await connectDB();
    const result = await pool.request()
    .query("select * from Acesso");
    return result.recordset;
}

export async function getAcessoId(id) {
    const pool = await connectDB();
    const result = await pool.request()
    .input("id",sql.Int,id)
    .query("select * from Acesso where id=@id");
    return result.recordset[0];
}

export async function createAcesso(dataHora, clienteId) {
    const pool = await connectDB();
    await pool.request()
    .input("dataHora",sql.DateTime,dataHora)
    .input("clienteId",sql.Int,clienteId)
    .query("insert into Acesso (dataHora, clienteId) values (@dataHora, @clienteId)");
}