// Para navegar até a pasta da aplicação: cd app_calculadora
// Para criar o app npm: npm init
// Instalar o express: npm install express@4.18.2
const calc = require('./calculadora');
const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    let html = '<h1>app_calculadora</h1>';
    html += '<h3>Rotas da aplicação:</h3>';
    html += '<p>/somar/:a/:b</p>';
    html += '<p>/subtrair/:a/:b</p>';
    html += '<p>/multiplicar/:a/:b</p>';
    html += '<p>/dividir/:a/:b</p>';
    res.send(html);
});

// Declara a rota /somar/:a/:b
// E especifica o seu comportamento
app.get('/somar/:a/:b', (req, res)=>{
    let a = Number(req.params.a);
    let b = Number(req.params.b);
    res.send(`${a} + ${b} = ${calc.somar(a, b)}`);
});

app.get('/subtrair/:a/:b', (req, res)=>{
    let a = Number(req.params.a);
    let b = Number(req.params.b);
    res.send(`${a} - ${b} = ${calc.subtrair(a, b)}`);
});

app.get('/multiplicar/:a/:b', (req, res)=>{
    let a = Number(req.params.a);
    let b = Number(req.params.b);
    res.send(`${a} * ${b} = ${calc.multiplicar(a, b)}`);
});

app.get('/dividir/:a/:b', (req, res)=>{
    let a = Number(req.params.a);
    let b = Number(req.params.b);
    res.send(`${a} / ${b} = ${calc.dividir(a, b)}`);
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});