import {sql, connectDB} from "../config/db.js";

export async function getGeneros() {
    const pool = await connectDB();
    const result = await pool.request().query("select * from Genero");
    return result.recordset;
}

export async function getGeneroId(id) {
    const pool = await connectDB();
    const result = await pool.request()
    .input("id",sql.Int,id)
    .query("select * from Genero where id=@id");
    return result.recordset[0];
}

export async function createGenero(nome, descricao) {
    const pool = await connectDB();
    await pool.request()
    .input("nome",sql.VarChar,nome)
    .input("descricao",sql.VarChar,descricao)
    .query("insert into Genero (nome, descricao) values (@nome, @descricao)");
}