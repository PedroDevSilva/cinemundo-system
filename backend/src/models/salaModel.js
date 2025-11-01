import { sql, connectDB } from "../config/db.js";

export async function getSalas() {
    const pool = await connectDB();
    const result = await pool.request()
    .query("select * from Sala");
    return result.recordset;
}

export async function getSalaId(id) {
    const pool = await connectDB();
    const result = await pool.request()
    .input("id",sql.Int,id)
    .query("select * from Sala where id=@id");
    return result.recordset[0];
}

export async function createSala(nomeSala,capacidade,tipoProjecao,tiposala,acessibilidade) {
    
    const pool = await connectDB();
    await pool.request()
    .input("nomeSala",sql.VarChar,nomeSala)
    .input("capacidade",sql.Int,capacidade)
    .input("tipoProjecao",sql.Bit,tipoProjecao)
    .input("tiposala",sql.Bit,tiposala)
    .input("acessibilidade",sql.Bit,acessibilidade)
    .query(`
            insert into Sala (nomeSala, capacidade, tipoProjecao, tiposala, acessibilidade)
            values (@nomeSala, @capacidade, @tipoProjecao, @tiposala, @acessibilidade )`)
}

export async function updateSala(id,{nomeSala,capacidade,tipoProjecao,tiposala,acessibilidade}) {
    const pool = await connectDB();
    await pool.request()
    .input("id",sql.Int,id)
    .input("nomeSala",sql.VarChar,nomeSala)
    .input("capacidade",sql.Int,capacidade)
    .input("tipoProjecao",sql.Bit,tipoProjecao)
    .input("tiposala",sql.Bit,tiposala)
    .input("acessibilidade",sql.Bit,acessibilidade)
    .query(`
            update Sala set nomeSala=@nomeSala, capacidade=@capacidade, tipoProjecao=@tipoProjecao,
            tiposala=@tiposala, acessibilidade=@acessibilidade
            where id=@id`)
}



