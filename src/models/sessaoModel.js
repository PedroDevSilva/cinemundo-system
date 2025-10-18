import { sql, connectDB } from "../config/db.js";

export async function getSessoes() {
    const pool = await connectDB();
    const result = await pool.request()
    .query("select * from Sessao");
    return result.recordset;
}

export async function getSessaoId(id) {
    const pool = await connectDB();
    const result = await pool.request()
    .input("id",sql.Int,id)
    .query("select * from Sessao where id=@id");
    return result.recordset[0];
}

export async function createSessao(data,horarioInicial,horarioFinal,linguaOrigem,lingualegenda,linguaDublagem) {
    
    const pool = await connectDB();
    await pool.request()
    .input("data",sql.SmallDateTime,data)
    .input("horarioInicial",sql.VarChar,horarioInicial)
    .input("horarioFinal",sql.VarChar,horarioFinal)
    .input("linguaOrigem",sql.VarChar,linguaOrigem)
    .input("lingualegenda",sql.VarChar,lingualegenda)
    .input("linguaDublagem",sql.VarChar,linguaDublagem)
    .query(`
            insert into Sessao (data, horarioInicial, horarioFinal, LinguaOrigem, lingualegenda, linguaDublagem)
            values (@data, @horarioInicial, @horarioFinal, @LinguaOrigem, @lingualegenda, @linguaDublagem)`)
}

export async function updateSessao(id,{data,horarioInicial,horarioFinal,linguaOrigem,lingualegenda,linguaDublagem}) {
    const pool = await connectDB();
    await pool.request()
    .input("id",sql.Int,id)
    .input("data",sql.SmallDateTime,data)
    .input("horarioInicial",sql.VarChar,horarioInicial)
    .input("horarioFinal",sql.VarChar,horarioFinal)
    .input("linguaOrigem",sql.VarChar,linguaOrigem)
    .input("lingualegenda",sql.VarChar,lingualegenda)
    .input("linguaDublagem",sql.VarChar,linguaDublagem)
    .query(`
            update Sessao set data=@data, horarioInicial=@horarioInicial, horarioFinal=@horarioFinal,
            linguaOrigem=@linguaOrigem, lingualegenda=@lingualegenda, linguaDublagem=@linguaDublagem
            where id=@id`)
}



