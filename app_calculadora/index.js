const express = require('express');
const calc = require('./calculadora');

const app = express();

app.get('/', (req, res)=>{
    res.send('Olá, mundo!');
});

app.get('/somar/5/3', (req, res)=>{
    res.send(`Olá, ${req.params.nome}!`);
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});