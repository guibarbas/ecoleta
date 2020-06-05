// importar dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

// Exportar modulo
module.exports = db

// //utilizar o objeto de banco de dados, para nossas perações
//  db.serialize(() => {
//     // criar uma tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             name TEXT,
//             image TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

    // // inserir dados na tabela
    // const query = `
    //     INSERT INTO places (
    //         name,
    //         image,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);
    // `
    // const values = [
    //     "Colectoria",
    //     "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
    //     "Av Alfredo ravaneli, 3409",
    //     "Bloco 4 Apto 208",
    //     "São Paulo",
    //     "Ribeirão Preto",
    //     "Resíduos Eletrônicos"
    // ]

    // function afterInsertData(err) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }

    //  db.run(query, values, afterInsertData)


    //consultar todos os dados da tabela
    // db.all(`SELECT * FROM places`, function (err, rows) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Aqui estão seus registros")
    //     console.log(rows)
    // })


    // //deletar um dado da tabela
//     db.run(`DELETE FROM places WHERE id = ?`, [], function (err) {
//         if (err) {
//             return console.log(err)
//         }
//         console.log("Registro deletado com sucesso!")
//     })
// })