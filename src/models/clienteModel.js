import {sql, connectDB} from "../config/db.js";

export async function getClientes() {
    const pool = await connectDB();
    const result = await pool.request()
    .query("select * from Cliente");
    return result.recordset;
}

export async function getClienteId(id) {
    const pool = await connectDB();
    const result = await pool.request()
    .input("id",sql.Int,id)
    .query("select * from Cliente where id=@id");
    return result.recordset[0];
}

export async function createCliente(cpf,nomeCompleto,dataAniversario,enderecoCompleto,celular,email,senha,pagaMeiaEntrada){
    const pool = await connectDB();
    await pool.request()
    .input("CPF",sql.VarChar,cpf)
    .input("nomeCompleto",sql.VarChar,nomeCompleto)
    .input("dataAniversario",sql.Date,dataAniversario)
    .input("enderecoCompleto",sql.VarChar,enderecoCompleto)
    .input("celular",sql.VarChar,celular)
    .input("email",sql.VarChar,email)
    .input("senha",sql.VarChar,senha)
    .input("pagaMeiaEntrada",sql.Bit,pagaMeiaEntrada)
    .query(`
            insert into Cliente (cpf, nomeCompleto, dataAniversario, enderecoCompleto, celular, email, senha, pagaMeiaEntrada)
            values (@CPF, @nomeCompleto, @dataAniversario, @enderecoCompleto, @celular, @email, @senha, @pagaMeiaEntrada)`)
}

export async function updateCliente(id,{cpf,nomeCompleto,dataAniversario,enderecoCompleto,celular,email,senha,pagaMeiaEntrada}) {
    const pool = await connectDB();
    await pool.request()
    .input("id",sql.Int,id)
    .input("CPF",sql.VarChar,cpf)
    .input("nomeCompleto",sql.VarChar,nomeCompleto)
    .input("dataAniversario",sql.Date,dataAniversario)
    .input("enderecoCompleto",sql.VarChar,enderecoCompleto)
    .input("celular",sql.VarChar,celular)
    .input("email",sql.VarChar,email)
    .input("senha",sql.VarChar,senha)
    .input("pagaMeiaEntrada",sql.Bit,pagaMeiaEntrada)
    .query(`
            update Cliente set cpf=@cpf, nomeCompleto=@nomeCompleto, dataAniversario=@dataAniversario,
            enderecoCompleto=@enderecoCompleto, celular=@celular, email=@email, senha=@senha,
            pagaMeiaEntrada=@pagaMeiaEntrada
            where id=@id`)
}

export async function delCliente(id) {
    const pool = await connectDB();
    await pool.request()
    .input("id",sql.Int,id)
    .query("delete from Cliente where id=@id")
}