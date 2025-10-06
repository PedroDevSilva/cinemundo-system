import {sql, connectDB} from "../config/db.js";

export async function getFilmes() {
    const pool = await connectDB();
    const result = await pool.request()
    .query("select * from Filme");
    return result.recordset;
}

export async function getFilmeId(id) {
    const pool = await connectDB();
    const result = await pool.request()
    .input("id",sql.Int,id)
    .query("select * from Filme where id=@id");
    return result.recordset[0];
}

export async function createFilme(titulo, sinopse, diretor, elenco, classificacaoIndicativa, duracao, poster, anoLancamento, produtora){
    const pool = await connectDB();
    await pool.request()
    .input("titulo",sql.VarChar,titulo)
    .input("sinopse",sql.Text,sinopse)
    .input("diretor",sql.VarChar,diretor)
    .input("elenco",sql.Text,elenco)
    .input("classificacaoIndicativa",sql.VarChar,classificacaoIndicativa)
    .input("duracao",sql.Int,duracao)
    .input("poster",sql.VarChar,poster)
    .input("anoLancamento",sql.Int,anoLancamento)
    .input("produtora",sql.VarChar,produtora)
    .query(`
            insert into Filme (titulo, sinopse, diretor, elenco, classificacaoIndicativa, duracao, poster, anoLancamento, produtora)
            values (@titulo, @sinopse, @diretor, @elenco, @classificacaoIndicativa, @duracao, @poster, @anoLancamento, @produtora)`)
}

export async function updateFilme(id,{titulo, sinopse, diretor, elenco, classificacaoIndicativa, duracao, poster, anoLancamento, produtora}) {
    const pool = await connectDB();
    await pool.request()
    .input("id",sql.Int,id)
    .input("titulo",sql.VarChar,titulo)
    .input("sinopse",sql.Text,sinopse)
    .input("diretor",sql.VarChar,diretor)
    .input("elenco",sql.Text,elenco)
    .input("classificacaoIndicativa",sql.VarChar,classificacaoIndicativa)
    .input("duracao",sql.Int,duracao)
    .input("poster",sql.VarChar,poster)
    .input("anoLancamento",sql.Int,anoLancamento)
    .input("produtora",sql.VarChar,produtora)
    .query(`
            update Filme set titulo=@titulo, sinopse=@sinopse, diretor=@diretor,
            elenco=@elenco, classificacaoIndicativa=@classificacaoIndicativa, duracao=@duracao, 
            poster=@poster, anoLancamento=@anoLancamento, produtora=@produtora
            where id=@id`)
}

export async function delFilme(id) {
    const pool = await connectDB();
    await pool.request()
    .input("id",sql.Int,id)
    .query("delete from Filme where id=@id")
}