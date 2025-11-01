import { sql, connectDB } from "../config/db.js";

export async function getAssentos() {
    const pool = await connectDB();
    const result = await pool.request()
    .query("select * from Assento");
    return result.recordset;
}

export async function getAssentoId(id) {
    const pool = await connectDB();
    const result = await pool.request()
    .input("id",sql.Int,id)
    .query("select * from Assento where id=@id");
    return result.recordset[0];
}

export async function createAssento(numCadeira,numFileira) {
    
    const pool = await connectDB();
    await pool.request()
    .input("numCadeira",sql.Int,numCadeira)
    .input("numFileira",sql.Int,numFileira)
    .query(`
            insert into Assento (numCadeira, numFileira)
            values (@numCadeira, @numFileira)`)
}

export async function updateAssento(id,{numCadeira,numFileira}) {
    const pool = await connectDB();
    await pool.request()
    .input("id",sql.Int,id)
    .input("numCadeira",sql.Int,numCadeira)
    .input("numFileira",sql.Int,numFileira)
    .query(`
            update Assento set numCadeira=@numCadeira, numFileira=@numFileira
            where id=@id`)
}
