const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('dados.db');

db.run(`INSERT INTO funcionarios (nome, chefe) VALUES ('Pablo', 'chefe')`);

//db.run("UPDATE funcionarios SET nome = 'Aprendiz 1' WHERE nome = 'Aprendiz'")

db.all(`SELECT * FROM funcionarios`, (err, rows) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(rows);
  })

