const express = require('express');
const app = express();
const ejs = require('ejs');

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('dados.db');

var funcionarios

db.all(`SELECT * FROM funcionarios`, (err, rows) => {
  if (err) {
    console.error(err);
    return;
  }
  funcionarios = rows
})

app.set('view engine', 'ejs');

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  
  // Renderizar o arquivo EJS e enviar a lista de nomes
  setTimeout(()=>{res.render('index', { nomes: funcionarios })}, 10);
  
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
